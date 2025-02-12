#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct Process {
    int pid, arrival_time, burst_time, remaining_time, completion_time, turnaround_time, waiting_time;
};

bool compareArrival(Process a, Process b) {
    return a.arrival_time < b.arrival_time;
}

int main() {
    int n = 6, time_quantum = 2;
    vector<Process> processes = {
        {0, 5, 5, 5, 0, 0, 0},
        {1, 4, 6, 6, 0, 0, 0},
        {2, 3, 7, 7, 0, 0, 0},
        {3, 1, 9, 9, 0, 0, 0},
        {4, 2, 2, 2, 0, 0, 0},
        {5, 6, 3, 3, 0, 0, 0}
    };

    sort(processes.begin(), processes.end(), compareArrival);

    queue<int> q;
    int current_time = 0, completed = 0;
    vector<bool> in_queue(n, false);

    q.push(0);
    in_queue[0] = true;

    while (completed != n) {
        if (q.empty()) {
            for (int i = 0; i < n; i++) {
                if (processes[i].remaining_time > 0 && !in_queue[i] && processes[i].arrival_time <= current_time) {
                    q.push(i);
                    in_queue[i] = true;
                    break;
                }
            }
            if (q.empty()) {
                current_time++;
                continue;
            }
        }

        int idx = q.front();
        q.pop();

        if (processes[idx].remaining_time > time_quantum) {
            current_time = max(current_time, processes[idx].arrival_time) + time_quantum;
            processes[idx].remaining_time -= time_quantum;
        } else {
            current_time = max(current_time, processes[idx].arrival_time) + processes[idx].remaining_time;
            processes[idx].remaining_time = 0;
            processes[idx].completion_time = current_time;
            completed++;
        }

        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time && processes[i].remaining_time > 0 && !in_queue[i]) {
                q.push(i);
                in_queue[i] = true;
            }
        }

        if (processes[idx].remaining_time > 0) {
            q.push(idx);
        }
    }

    // Calculate turnaround time and waiting time
    for (int i = 0; i < n; i++) {
        processes[i].turnaround_time = processes[i].completion_time - processes[i].arrival_time;
        processes[i].waiting_time = processes[i].turnaround_time - processes[i].burst_time;
    }

    
    // Output results
    cout << "PID  Arrival Time  Burst Time  Completion Time  Turnaround Time  Waiting Time\n";
    for (int i = 0; i < n; i++) {
        cout << processes[i].pid << "    "
             << processes[i].arrival_time << "              "
             << processes[i].burst_time << "              "
             << processes[i].completion_time << "               "
             << processes[i].turnaround_time << "              "
             << processes[i].waiting_time << "\n";
    }
      double total_tat = 0, total_wt = 0;
     for (int i = 0; i < n; i++) {
          total_tat += processes[i].turnaround_time;
           total_wt += processes[i].waiting_time;
}

// Print average values
cout << "\nAverage Turnaround Time: " << total_tat / n << endl;
cout << "Average Waiting Time: " << total_wt / n << endl;

     return 0;
}