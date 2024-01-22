import { bootstrapApplication } from '@angular/platform-browser';
import { AppHaha } from './app/home';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppHaha, config);

export default bootstrap;
