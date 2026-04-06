import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app-routing.module';
import {
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbToastrModule,
  NbChatModule,
  NbThemeModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NB_CORE_PROVIDERS } from './@core/core.module';
import { DEFAULT_THEME } from './@theme/styles/theme.default';
import { COSMIC_THEME } from './@theme/styles/theme.cosmic';
import { CORPORATE_THEME } from './@theme/styles/theme.corporate';
import { DARK_THEME } from './@theme/styles/theme.dark';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      NbSidebarModule.forRoot(),
      NbMenuModule.forRoot(),
      NbDatepickerModule.forRoot(),
      NbDialogModule.forRoot(),
      NbWindowModule.forRoot(),
      NbToastrModule.forRoot(),
      NbChatModule.forRoot({
        messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
      }),
      NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    ),
    ...NB_CORE_PROVIDERS,
    ...NbThemeModule.forRoot(
      { name: 'default' },
      [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
    ).providers,
  ],
};
