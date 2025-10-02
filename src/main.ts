import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    ...appConfig.providers // if you have other providers in appConfig
  ]
})
  .catch((err) => console.error(err));
