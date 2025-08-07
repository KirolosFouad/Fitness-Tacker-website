import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'nutritions',
    component: NutritionComponent
  },

  {
    path: 'exercises',
    component: ExerciseComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
