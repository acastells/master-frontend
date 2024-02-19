import { Component } from '@angular/core';
import { SharedModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {

}
