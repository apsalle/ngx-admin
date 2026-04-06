import { Routes } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';

export const EDITORS_ROUTES: Routes = [{
  path: '',
  component: EditorsComponent,
  children: [{
    path: 'tinymce',
    component: TinyMCEComponent,
  }, {
    path: 'ckeditor',
    component: CKEditorComponent,
  }],
}];
