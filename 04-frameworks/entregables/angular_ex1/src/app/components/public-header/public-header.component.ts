import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss'
})
export class PublicHeaderComponent {

}
