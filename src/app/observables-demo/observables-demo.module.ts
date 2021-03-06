import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ObservablesDemoComponent } from './observables-demo.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ ObservablesDemoComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: ObservablesDemoComponent }
    ])
  ]
})
export class ObservablesDemoModule { }
