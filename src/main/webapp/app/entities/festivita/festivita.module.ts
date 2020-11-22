import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZtlSharedModule } from 'app/shared/shared.module';
import { FestivitaComponent } from './festivita.component';
import { FestivitaDetailComponent } from './festivita-detail.component';
import { FestivitaUpdateComponent } from './festivita-update.component';
import { FestivitaDeleteDialogComponent } from './festivita-delete-dialog.component';
import { festivitaRoute } from './festivita.route';

@NgModule({
  imports: [ZtlSharedModule, RouterModule.forChild(festivitaRoute)],
  declarations: [FestivitaComponent, FestivitaDetailComponent, FestivitaUpdateComponent, FestivitaDeleteDialogComponent],
  entryComponents: [FestivitaDeleteDialogComponent],
})
export class ZtlFestivitaModule {}
