import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const Material = [MatToolbarModule
];

@NgModule({
  
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
