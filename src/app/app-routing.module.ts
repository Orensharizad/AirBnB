import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { StayResolver } from './services/stay.resolver';
import { StayDetailsComponent } from './views/stay-details/stay-details.component';
import { StayIndexComponent } from './views/stay-index/stay-index.component';

const routes: Routes = [

  {
    path: 'stay/:id',
    component: StayDetailsComponent,
    resolve: { stay: StayResolver }
  },
  {
    path: '',
    component: StayIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.prodaction })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
