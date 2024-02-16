import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PublicMenuComponent } from '../public-menu/public-menu.component';
import { PublicHeaderComponent } from '../public-header/public-header.component';
import { PrivateMenuComponent } from '../private-menu/private-menu.component';
import { PrivateHeaderComponent } from '../private-header/private-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, PublicMenuComponent, PublicHeaderComponent, PrivateMenuComponent, PrivateHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loggedIn = false;
}
