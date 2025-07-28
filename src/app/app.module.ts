import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { UsersComponent } from './users/users.component';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NutritionComponent,
    ExerciseComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [ provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
