import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { List } from '../common/list.interface';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  lists!: List[];

  ngOnInit() {
    this.lists = [
      {
        id: 1,
        title: 'Title 1',
      },
      {
        id: 2,
        title: 'Title 2',
      },
      {
        id: 3,
        title: 'Title 3',
      },
      {
        id: 4,
        title: 'Title 4',
      },
    ];
  }
}
