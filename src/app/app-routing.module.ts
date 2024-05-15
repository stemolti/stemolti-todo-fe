import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './pages/todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
},
{
    path: 'dashboard',
    component: TodoDashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
