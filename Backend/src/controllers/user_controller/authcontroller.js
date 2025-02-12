const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../../utils/ApiErr");
const ApiResponse = require("../../utils/ApiRes");
const AsyncHandler = require("../../utils/AsyncHandler");
const User = require("../../models/user.model");
const dotenv = require("dotenv");
dotenv.config();



const register = AsyncHandler(async (req, res) => {
	try {
		const { name, email, password, phone } = req.body;

		// Validate required fields
		if (!name || !email || !password) {
			return res
				.status(400)
				.json(
					new ApiError(
						400,
						"Name, Email, and Password are required"
					)
				);
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.json(
				new ApiError(
					400,
					"User already registered with this email"
				)
			);
		}

		// Hash password before saving
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
			phone,
		});

		// Generate JWT Token
		const token = jwt.sign(
			{ id: newUser._id },
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		);

		// Send Response
		return res
			.status(201)
			.json(
				new ApiResponse(
					201,
					{ token },
					"User registered successfully"
				)
			);
	} catch (error) {
		console.error("Register Error:", error);
		return res
			.status(500)
			.json(new ApiError(500, "Internal Server Error"));
	}
});





const login = AsyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validate email and password
		if (!email || !password) {
			return res
				.status(400)
				.json({
					success: false,
					message: "Email and password are required",
				});
		}

		// Check if user exists
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(401)
				.json({
					success: false,
					message: "Invalid email or password",
				});
		}

		// Debugging: Log user object to check if password exists
		console.log("User found:", user);

		// Ensure user has a password field before comparing

		// Compare password
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res
				.status(401)
				.json({
					success: false,
					message: "Invalid email or password",
				});
		}

		// Generate JWT Token
		const token = jwt.sign(
			{ id: user._id },
			process.env.JWT_SECRET,
			{
				expiresIn: "1d",
			}
		);

		return res.status(200).json({
			success: true,
			message: "Login successful",
			token,
		});
	} catch (error) {
		console.error("Login Error:", error);
		return res
			.status(500)
			.json({
				success: false,
				message: "Internal Server Error",
			});
	}
});




const profile = AsyncHandler(async (req, res, next) => {


	try {
		const userId = req.user.id; 

		// Fetch user details from DB
		const user = await User.findById(userId).select(
			"name email phone"
		); // Exclude password for security

		if (!user) {
			return next(new ApiError(404, "User not found"));
		}

		// Masking the user's name
		const nameParts = user.name.split(" ");
		const maskedName = nameParts
			.map((part) => part[0])
			.join("")
			.toUpperCase(); // Example: "Aaryan Meena" → "AM"

		res.status(200).json(
			new ApiResponse(
				200,
				{
					maskedName,
					email: user.email,
					phone: user.phone,
				},
				"User profile retrieved"
			)
		);
	} catch (error) {
		next(new ApiError(500, "Internal Server Error"));
	}
});



module.exports = { register, profile, login };
