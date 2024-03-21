import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IconsComponent } from './Components/icons/icons.component';
import { ResetComponent } from './Components/reset/reset.component';
import { AuthGuard } from './Authgaurd/authgaurd.guard';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { GetnoteComponent } from './Components/getnote/getnote.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import { ArchiveComponent } from './Components/archive/archive.component';
const routes: Routes = [
  {path:'',redirectTo:"/register",pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  {path:'dash',component:DashboardComponent},
  { path: 'register', component: RegisterComponent } ,
  {path:'forget',component:ForgetComponent},
  {path:'reset',component:ResetComponent},
  {path:'sidenav',component:SidenavComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'regDemo',component:RegisterComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'get',component:GetnoteComponent}
  ]},
  {path:'dashboard',component:DashboardComponent},
  {path:'icons',component:IconsComponent},
  {path:'create',component:CreatenoteComponent},
  {path:'display',component:DisplaynoteComponent},
  {path:'get',component:GetnoteComponent},
  {path:'archive',component:ArchiveComponent}
  // {path:'update',component:UpdatenoteComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
