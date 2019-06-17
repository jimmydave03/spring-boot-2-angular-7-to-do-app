import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoComponent } from './todo/todo.component';
import { HttpService } from './http.service';
import { ToDoService } from './todo/todo.service';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
    ],
        declarations: [
        AppComponent,
        HeaderComponent,
        ToDoComponent
    ],
    providers: [ HttpService, ToDoService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }