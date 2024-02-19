import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CrudComponent } from './components/pages/crud/crud.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

export const routes: Routes = [
	// public
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'about', component: AboutComponent },

	// private
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'crud', component: CrudComponent },
	{ path: 'profile', component: ProfileComponent },
  ];
