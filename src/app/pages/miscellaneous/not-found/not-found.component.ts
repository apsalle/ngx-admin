import { NbMenuService } from '@nebular/theme';
import {Component, inject} from '@angular/core';

@Component({
  standalone: false,
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  private menuService = inject(NbMenuService);

  goToHome() {
    this.menuService.navigateHome();
  }
}
