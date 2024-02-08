import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../common/list.interface';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  @Input() name!: string;
  @Input() importance!: number;
  @Input() id!: number;
  @Input() tasks!: Task[];

  ngOnInit() {
    this.sortLogic();
  }
  sortLogic() {
    this.tasks.sort((a, b) => a.importance - b.importance);
  }
}
