import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZtlSharedModule } from 'app/shared/shared.module';
import { TipologiaZonaComponent } from './tipologia-zona.component';
import { TipologiaZonaDetailComponent } from './tipologia-zona-detail.component';
import { TipologiaZonaUpdateComponent } from './tipologia-zona-update.component';
import { TipologiaZonaDeleteDialogComponent } from './tipologia-zona-delete-dialog.component';
import { tipologiaZonaRoute } from './tipologia-zona.route';

@NgModule({
  imports: [ZtlSharedModule, RouterModule.forChild(tipologiaZonaRoute)],
  declarations: [TipologiaZonaComponent, TipologiaZonaDetailComponent, TipologiaZonaUpdateComponent, TipologiaZonaDeleteDialogComponent],
  entryComponents: [TipologiaZonaDeleteDialogComponent],
})
export class ZtlTipologiaZonaModule {}
