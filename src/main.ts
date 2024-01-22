import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppHaha } from './app/home';


bootstrapApplication(AppHaha, appConfig)
  .catch((err) => console.error(err));
