import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
