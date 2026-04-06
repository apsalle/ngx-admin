import {Component, EventEmitter, inject} from '@angular/core';
import {
  NbCalendarCell,
  NbCalendarDayPickerComponent,
  NbCalendarMonthModelService,
  NbDateService,
} from '@nebular/theme';
import { TranslationWidth } from '@angular/common';

@Component({
  standalone: false,
  selector: 'ngx-calendar-kit-month-cell',
  styleUrls: ['month-cell.component.scss'],
  templateUrl: 'month-cell.component.html',
})
export class CalendarKitMonthCellComponent extends NbCalendarDayPickerComponent<Date, Date>
  implements NbCalendarCell<Date, Date> {
  select: EventEmitter<Date> = new EventEmitter();
  selectedValue: Date;

  private dateService = inject<NbDateService<Date>>(NbDateService);

  constructor() {
    const monthModel = inject<NbCalendarMonthModelService<Date>>(NbCalendarMonthModelService);
    super(monthModel);
  }

  get title() {
    return this.dateService.getMonthName(this.date, TranslationWidth.Wide);
  }
}
