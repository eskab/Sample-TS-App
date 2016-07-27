import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent, HomeResolver, HomeService } from './home';
import { AboutComponent } from './about';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent, resolve: { homeData: HomeResolver } },
  { path: 'about', component: AboutComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  HomeResolver,
  HomeService
];
