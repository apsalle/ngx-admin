import {Component, Input, OnDestroy, inject} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'ngx-traffic-back-card',
  styleUrls: ['./traffic-back-card.component.scss'],
  templateUrl: './traffic-back-card.component.html',
})
export class TrafficBackCardComponent implements OnDestroy {

  private alive = true;

  @Input() trafficBarData: any;

  currentTheme: string;

  private themeService = inject(NbThemeService);

  constructor() {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
