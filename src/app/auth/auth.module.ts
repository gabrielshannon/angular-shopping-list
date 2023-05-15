import {FormsModule, NgModel} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";
import {HeaderComponent} from "../header/header.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild([{path: 'auth', component: AuthComponent}])]
})

export class AuthModule {
  
}


// https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466504#content
