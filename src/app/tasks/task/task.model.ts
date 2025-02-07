export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// this is model used when sending data of entered new task
// you could also create a separate model within folder of new task component
export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
