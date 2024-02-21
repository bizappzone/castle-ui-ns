import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CastleNsButtonComponent } from './castle-ns-button.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CastleNsButtonComponent }])],
  declarations: [CastleNsButtonComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CastleNsButtonModule {}
