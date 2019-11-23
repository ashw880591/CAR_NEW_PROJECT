import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent} from './angular/angular.component';
import {ApplicationComponent} from './application/application.component';
import {HostelComponent} from './hostel/hostel.component';
import {ImaginComponent} from './imagin/imagin.component';
import {StudentComponent} from './student/student.component';
import {EmployeeComponent} from './employee/employee.component';
import {ProductComponent} from './product/product.component';
import {ModuleComponent} from './module/module.component';
import {HospitalComponent} from './hospital/hospital.component';
import {CustomerComponent} from './customer/customer.component';
import {DevelopementComponent} from './developement/developement.component';
import { RegiComponent } from './regi/regi.component';
import { ActionComponent } from './action/action.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { Naukarireg } from './naukarireg/naukarireg.component';
import { NotebookComponent } from './notebook/notebook.component';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { DirectiveComponent } from './directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ApplicationComponent,
    HostelComponent,
    ImaginComponent,
    StudentComponent,
    EmployeeComponent,
    ProductComponent,
    ModuleComponent,
    HospitalComponent,
    CustomerComponent,
    DevelopementComponent,
    RegiComponent,
    ActionComponent,
    StudentregComponent,
    Naukarireg,
    NotebookComponent,CollegeComponent,
    HomeComponent,
    HtmlComponent,
    DirectiveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,Naukarireg]
})
export class AppModule { }
