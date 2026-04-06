/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { NbSidebarModule, NbMenuModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoreModule } from './app/@core/core.module';
import { ThemeModule } from './app/@theme/theme.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, NbSidebarModule.forRoot(), NbMenuModule.forRoot(), NbDatepickerModule.forRoot(), NbDialogModule.forRoot(), NbWindowModule.forRoot(), NbToastrModule.forRoot(), NbChatModule.forRoot({
            messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
        }), NgxEchartsModule.forRoot({ echarts: () => import('echarts') }), CoreModule.forRoot(), ThemeModule.forRoot()),
        provideHttpClient(),
        provideAnimations(),
    ]
})
  .catch(err => console.error(err));
