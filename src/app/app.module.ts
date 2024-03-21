import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {  HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IconsComponent } from './Components/icons/icons.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { ResetComponent } from './Components/reset/reset.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { AuthService } from './Services/Auth/auth.service';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { GetnoteComponent } from './Components/getnote/getnote.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveComponent } from './Components/archive/archive.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    DashboardComponent,
    IconsComponent,
    ForgetComponent,
    ResetComponent,
    CreatenoteComponent,
    DisplaynoteComponent,
    GetnoteComponent,
    UpdatenoteComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
