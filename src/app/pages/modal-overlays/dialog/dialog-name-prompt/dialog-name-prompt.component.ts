import {Component, inject} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  standalone: false,
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent {

  protected ref = inject<NbDialogRef<DialogNamePromptComponent>>(NbDialogRef);

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
