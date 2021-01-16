import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
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
  {
    path: 'app-contact',
      component: ContactComponent,
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
