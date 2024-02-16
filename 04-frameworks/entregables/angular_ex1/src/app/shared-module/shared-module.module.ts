import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const modules = [MatCardModule, MatButtonModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
