export interface Task {
  content: string;
  id: number;
  checked: boolean;
}

export interface List {
  id: number;
  name: string;
  tasks: Task[];
}
