const Event = require('../../models/event.model');



const createevent = async(req,res)=>{
     const  {  title,description,location,category} = req.body;
     const createdBy = req.user.id;
   
     


}