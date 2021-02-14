import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveOperationComponent } from './add-operation/save-operation.component';



const routes: Routes = [
  { path: '', redirectTo: 'operations', pathMatch: 'full' },
  { path: 'operations', component: SaveOperationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesTs { }
