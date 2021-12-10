import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { contactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { MyPipePipe } from './my-pipe.pipe';
import { CustomStyleDirective } from './custom-style.directive';
import { TwowayComponentComponent } from './twoway-component/twoway-component.component';
import { ModuleA } from './ModuleA/moduleA';
import { ModuleB } from './ModuleB/moduleB';
import { DatacomponentComponent } from './data/datacomponent.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { LoginComponent } from './login/login.component';
import { ToggleBtnComponenet } from 'src/parent/child/togglebtn.component';
import { ParentComponenet } from 'src/parent/parent-component';
import { NumbersapiComponent } from './numbersapi/numbersapi.component';
import { StarratingComponent } from './star/star.component';
import { ChildStarComponent } from './star/childstar/child.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, contactComponent, StudentComponent, MyPipePipe, CustomStyleDirective, TwowayComponentComponent,
    TodoComponentComponent,
    DatacomponentComponent,
    LoginComponent,
    ToggleBtnComponenet,
    ParentComponenet,
    NumbersapiComponent,
    StarratingComponent,ChildStarComponent
  ],
  imports: [
    BrowserModule, FormsModule, ModuleA, ModuleB, HttpClientModule
  ],
  providers: [],
  bootstrap: [LoginComponent
  ]
})
export class AppModule { }
// AppComponent,MyPipePipe,CustomStyleDirective,TwowayComponentComponent,ComponentA
