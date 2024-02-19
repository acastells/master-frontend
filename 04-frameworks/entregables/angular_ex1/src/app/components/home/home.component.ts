import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
