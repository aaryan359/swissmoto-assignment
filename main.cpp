#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct Process {
    int pid;
    int arrival_time;
    int burst_time;
    int remaining_time;
    int completion_time;
    int waiting_time;
    int turnaround_time;
};

int main() {
    int n = 5; 
    int time_quantum = 2;
    vector<Process> processes = {
        {0, 0, 5, 5, 0, 0, 0},
        {1, 1, 3, 3, 0, 0, 0},
        {2, 2, 1, 1, 0, 0, 0},
        {3, 3, 2, 2, 0, 0, 0},
        {4, 4, 3, 3, 0, 0, 0}
    };

    queue<int> ready_queue;
    int current_time = 0, completed = 0;
    vector<bool> is_in_queue(n, false);

    ready_queue.push(0);
    is_in_queue[0] = true;

    while (completed != n) {
        if (ready_queue.empty()) {
            current_time++;
            for (int i = 0; i < n; i++) {
                if (processes[i].arrival_time <= current_time && processes[i].remaining_time > 0 && !is_in_queue[i]) {
                    ready_queue.push(i);
                    is_in_queue[i] = true;
                }
            }
            continue;
        }

        int idx = ready_queue.front();
        ready_queue.pop();

        int exec_time = min(time_quantum, processes[idx].remaining_time);
        processes[idx].remaining_time -= exec_time;
        current_time += exec_time;

        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time && processes[i].remaining_time > 0 && !is_in_queue[i]) {
                ready_queue.push(i);
                is_in_queue[i] = true;
            }
        }

        if (processes[idx].remaining_time == 0) {
            processes[idx].completion_time = current_time;
            processes[idx].turnaround_time = processes[idx].completion_time - processes[idx].arrival_time;
            processes[idx].waiting_time = processes[idx].turnaround_time - processes[idx].burst_time;
            completed++;
        } else {
            ready_queue.push(idx);
        }
    }

    double total_tat = 0, total_wt = 0;
    for (int i = 0; i < n; i++) {
        total_tat += processes[i].turnaround_time;
        total_wt += processes[i].waiting_time;
        cout << "P" << processes[i].pid << ": TAT = " << processes[i].turnaround_time << ", WT = " << processes[i].waiting_time << endl;
    }

    cout << "Average Turnaround Time = " << total_tat / n << endl;
    cout << "Average Waiting Time = " << total_wt / n << endl;

   return 0;
}