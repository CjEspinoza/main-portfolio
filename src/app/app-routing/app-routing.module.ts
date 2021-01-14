import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SkillsComponent } from '../skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
},
  {
    path: 'app-skills',
      component: SkillsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
declarations: []
})
export class AppRoutingModule { }
