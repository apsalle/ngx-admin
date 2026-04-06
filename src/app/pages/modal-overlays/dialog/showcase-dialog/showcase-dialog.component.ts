import {Component, Input, inject} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  standalone: false,
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  protected ref = inject<NbDialogRef<ShowcaseDialogComponent>>(NbDialogRef);

  dismiss() {
    this.ref.close();
  }
}
