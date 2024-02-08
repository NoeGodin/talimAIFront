export interface Task {
  content: string;
  id: number;
  checked: boolean;
  importance: number;
}

export interface List {
  id: number;
  name: string;
  tasks: Task[];
  importance:number;
}
