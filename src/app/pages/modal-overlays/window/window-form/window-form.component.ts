import {Component, inject} from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  standalone: false,
  template: `
    <form class="form">
      <label for="subject">Subject:</label>
      <input nbInput id="subject" type="text">

      <label class="text-label" for="text">Text:</label>
      <textarea nbInput id="text"></textarea>
    </form>
  `,
  styleUrls: ['window-form.component.scss'],
})
export class WindowFormComponent {
  public windowRef = inject(NbWindowRef);

  close() {
    this.windowRef.close();
  }
}
