import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RiggingComponent } from './rigging/rigging.component';
import { ContactComponent } from './contact/contact.component';
import { CanopyComponent } from './canopy/canopy.component';


const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'rigging', component: RiggingComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'canopy', component: CanopyComponent },
    { path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class AppRoutingModule {

}
