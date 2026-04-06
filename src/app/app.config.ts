import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
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
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { NgxEchartsModule } from 'ngx-echarts';
import { of as observableOf } from 'rxjs';

import { routes } from './app.routes';
import { DEFAULT_THEME } from './@theme/styles/theme.default';
import { COSMIC_THEME } from './@theme/styles/theme.cosmic';
import { CORPORATE_THEME } from './@theme/styles/theme.corporate';
import { DARK_THEME } from './@theme/styles/theme.dark';

import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './@core/utils';

import { UserData } from './@core/data/users';
import { ElectricityData } from './@core/data/electricity';
import { SmartTableData } from './@core/data/smart-table';
import { UserActivityData } from './@core/data/user-activity';
import { OrdersChartData } from './@core/data/orders-chart';
import { ProfitChartData } from './@core/data/profit-chart';
import { TrafficListData } from './@core/data/traffic-list';
import { EarningData } from './@core/data/earning';
import { OrdersProfitChartData } from './@core/data/orders-profit-chart';
import { TrafficBarData } from './@core/data/traffic-bar';
import { ProfitBarAnimationChartData } from './@core/data/profit-bar-animation-chart';
import { TemperatureHumidityData } from './@core/data/temperature-humidity';
import { SolarData } from './@core/data/solar';
import { TrafficChartData } from './@core/data/traffic-chart';
import { StatsBarData } from './@core/data/stats-bar';
import { CountryOrderData } from './@core/data/country-order';
import { StatsProgressBarData } from './@core/data/stats-progress-bar';
import { VisitorsAnalyticsData } from './@core/data/visitors-analytics';
import { SecurityCamerasData } from './@core/data/security-cameras';

import { UserService } from './@core/mock/users.service';
import { ElectricityService } from './@core/mock/electricity.service';
import { SmartTableService } from './@core/mock/smart-table.service';
import { UserActivityService } from './@core/mock/user-activity.service';
import { OrdersChartService } from './@core/mock/orders-chart.service';
import { ProfitChartService } from './@core/mock/profit-chart.service';
import { TrafficListService } from './@core/mock/traffic-list.service';
import { EarningService } from './@core/mock/earning.service';
import { OrdersProfitChartService } from './@core/mock/orders-profit-chart.service';
import { TrafficBarService } from './@core/mock/traffic-bar.service';
import { ProfitBarAnimationChartService } from './@core/mock/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './@core/mock/temperature-humidity.service';
import { SolarService } from './@core/mock/solar.service';
import { TrafficChartService } from './@core/mock/traffic-chart.service';
import { StatsBarService } from './@core/mock/stats-bar.service';
import { CountryOrderService } from './@core/mock/country-order.service';
import { StatsProgressBarService } from './@core/mock/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './@core/mock/visitors-analytics.service';
import { SecurityCamerasService } from './@core/mock/security-cameras.service';
import { PeriodsService } from './@core/mock/periods.service';

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    return observableOf('guest');
  }
}

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      NbThemeModule.forRoot(
        { name: 'default' },
        [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
      ),
      NbSidebarModule.forRoot(),
      NbMenuModule.forRoot(),
      NbDatepickerModule.forRoot(),
      NbDialogModule.forRoot(),
      NbWindowModule.forRoot(),
      NbToastrModule.forRoot(),
      NbChatModule.forRoot({
        messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
      }),
      NbEvaIconsModule,
      NbAuthModule.forRoot({
        strategies: [
          NbDummyAuthStrategy.setup({
            name: 'email',
            delay: 3000,
          }),
        ],
        forms: {
          login: {
            socialLinks: socialLinks,
          },
          register: {
            socialLinks: socialLinks,
          },
        },
      }),
      NbSecurityModule.forRoot({
        accessControl: {
          guest: {
            view: '*',
          },
          user: {
            parent: 'guest',
            create: '*',
            edit: '*',
            remove: '*',
          },
        },
      }),
      NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    ),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    // Mock data services
    UserService,
    ElectricityService,
    SmartTableService,
    UserActivityService,
    OrdersChartService,
    ProfitChartService,
    TrafficListService,
    PeriodsService,
    EarningService,
    OrdersProfitChartService,
    TrafficBarService,
    ProfitBarAnimationChartService,
    TemperatureHumidityService,
    SolarService,
    TrafficChartService,
    StatsBarService,
    CountryOrderService,
    StatsProgressBarService,
    VisitorsAnalyticsService,
    SecurityCamerasService,
    // Data service abstractions → concrete implementations
    { provide: UserData, useClass: UserService },
    { provide: ElectricityData, useClass: ElectricityService },
    { provide: SmartTableData, useClass: SmartTableService },
    { provide: UserActivityData, useClass: UserActivityService },
    { provide: OrdersChartData, useClass: OrdersChartService },
    { provide: ProfitChartData, useClass: ProfitChartService },
    { provide: TrafficListData, useClass: TrafficListService },
    { provide: EarningData, useClass: EarningService },
    { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
    { provide: TrafficBarData, useClass: TrafficBarService },
    { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
    { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
    { provide: SolarData, useClass: SolarService },
    { provide: TrafficChartData, useClass: TrafficChartService },
    { provide: StatsBarData, useClass: StatsBarService },
    { provide: CountryOrderData, useClass: CountryOrderService },
    { provide: StatsProgressBarData, useClass: StatsProgressBarService },
    { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
    { provide: SecurityCamerasData, useClass: SecurityCamerasService },
    { provide: NbRoleProvider, useClass: NbSimpleRoleProvider },
    // Core services
    AnalyticsService,
    LayoutService,
    PlayerService,
    SeoService,
    StateService,
  ],
};
