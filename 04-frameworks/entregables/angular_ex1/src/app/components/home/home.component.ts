import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PublicHeaderComponent } from '../public-header/public-header.component';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { SharedModule } from '../../shared-module/shared-module.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, FooterComponent, PublicHeaderComponent, PrivateHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loggedIn = false;
}
