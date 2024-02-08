import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { List } from '../common/list.interface';
import { ListComponent } from '../list/list.component';
import { TaskComponent } from '../task/task.component';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, NgFor, ReactiveFormsModule, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  lists!: List[];
  createListForm = new FormGroup({
    importanceListe: new FormControl(''),
    name: new FormControl(''),
    content: new FormControl(''),
    importance: new FormControl(''),
  });
  newTasks: Task[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchLists();
  }

  sortLogic() {
    this.lists.sort((a, b) => a.importance - b.importance);
  }

  addTask(event: Event) {
    event.preventDefault();
    const content = this.createListForm.get('content')?.value;
    const importance = Number(this.createListForm.get('importance')?.value);
    if (content) this.newTasks.push(new Task(content, importance));
  }

  async createList() {
    const name = this.createListForm.get('name')?.value;
    const importanceListe = this.createListForm.get('importanceListe')?.value;

    if (name)
      firstValueFrom(this.httpClient.post('http://localhost:9000/lists', { name:name, importance:importanceListe})).then((list: any) => {
        Promise.all(
          this.newTasks.map((newTask) => {
            firstValueFrom(this.httpClient.post('http://localhost:9000/tasks', { listId: list.id, content: newTask.content, importance: newTask.importance}));
          }),
        ).then(() => this.fetchLists());
      });

    this.createListForm.setValue({ name: '', content: '', importance: '',importanceListe: ''});
  }

  async fetchLists() {
    await firstValueFrom(this.httpClient.get('http://localhost:9000/lists')).then((lists: any) => {
      this.lists = lists;
    });
    this.sortLogic();
  }
}
