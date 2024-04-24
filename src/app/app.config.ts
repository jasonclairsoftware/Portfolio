import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BsModalService } from 'ngx-bootstrap/modal';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), BsModalService]
};
