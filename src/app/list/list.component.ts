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
  @Input() title!: string;
  @Input() id!: number;
  tasks!: Task[];

  ngOnInit() {
    this.tasks = [
      {
        content: 'Content 1',
        id: 1,
        checked: false,
      },
      {
        content: 'Content 2',
        id: 2,
        checked: true,
      },
      {
        content: 'Content 3',
        id: 3,
        checked: false,
      },
      {
        content: 'Content 4',
        id: 4,
        checked: true,
      },
    ];
  }
}
