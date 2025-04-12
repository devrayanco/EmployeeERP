import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { config as serverRoutesConfig } from './app.routes.server';

export const config: ApplicationConfig = mergeApplicationConfig(
  appConfig,
  serverRoutesConfig
);
