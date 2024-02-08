export class Task {
  content!: string;
  importance!: number;

  constructor(content: string, importance: number) {
    this.content = content;
    this.importance = importance;
  }
}