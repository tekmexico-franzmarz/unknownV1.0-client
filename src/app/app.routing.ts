import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/root-component/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { LogoutComponent } from './components/logout/logout.component';

import { DataService } from './services/data/data.service';
import { BroadcastService } from './services/broadcast/broadcast.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'login', component: LoginComponent, data: { state: 'login' } },
  { path: 'register', component: RegisterComponent, data: { state: 'register' } },
  /* { path: 'dashboard', component: DashboardComponent,  resolve: { loadedProfile: DataService }, children: [ */
    { path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: MainComponent },
      { path: 'main', component: MainComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  }
];

export const Routing = RouterModule.forRoot(routes);
