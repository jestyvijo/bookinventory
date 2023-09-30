import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

import { AddbookComponent } from './addbook/addbook.component';
import { ListbookComponent } from './listbook/listbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'user', component:UserComponent,
    children: [
      {
        path: '',
        component: AddbookComponent
      },
      {
        path: 'list',
        component: ListbookComponent
      },
      {
        path: 'update',
        component: UpdatebookComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
