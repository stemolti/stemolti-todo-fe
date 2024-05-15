import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stemolti-todo-fe';

  isExpanded: boolean = false;

  expandContainer() {
    this.isExpanded = true;
  }

  collapseContainer() {
    this.isExpanded = false;
  }

}
