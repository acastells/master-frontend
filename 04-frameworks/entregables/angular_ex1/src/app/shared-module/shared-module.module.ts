import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [MatCardModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatInputModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
