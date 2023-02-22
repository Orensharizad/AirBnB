import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { environment } from 'src/environments/environment.development'
import { StayResolver } from './services/stay.resolver'
import { StayDetailsComponent } from './views/stay-details/stay-details.component'
import { StayEditComponent } from './views/stay-edit/stay-edit.component'
import { StayIndexComponent } from './views/stay-index/stay-index.component'

const routes: Routes = [
  {
    path: 'stay/edit',
    component: StayEditComponent,
  },
  {
    path: 'stay/:id',
    component: StayDetailsComponent,
    resolve: { stay: StayResolver }
  },
  {
    path: '',
    component: StayIndexComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
