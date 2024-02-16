import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules = [MatCardModule, MatButtonModule, MatToolbarModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
