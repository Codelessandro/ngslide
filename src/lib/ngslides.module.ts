import { NgModule } from '@angular/core';
import { NgslidesComponent } from './ngslides.component';
import { NgpresComponent } from './ngpres/ngpres.component';

@NgModule({
  imports: [
  ],
  declarations: [NgslidesComponent, NgpresComponent],
  exports: [NgslidesComponent, NgpresComponent]
})
export class NgslidesModule { }
