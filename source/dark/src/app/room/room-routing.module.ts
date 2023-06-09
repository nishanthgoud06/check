import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllroomComponent } from './allroom/allroom.component';
import { AddAllotmentComponent } from './add-allotment/add-allotment.component';
import { EditAllotmentComponent } from './edit-allotment/edit-allotment.component';
const routes: Routes = [
  {
    path: 'all-rooms',
    component: AllroomComponent
  },
  {
    path: 'add-allotment',
    component: AddAllotmentComponent
  },
  {
    path: 'edit-allotment',
    component: EditAllotmentComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}
