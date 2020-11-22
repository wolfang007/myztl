import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZtlSharedModule } from 'app/shared/shared.module';
import { ZonaComponent } from './zona.component';
import { ZonaDetailComponent } from './zona-detail.component';
import { ZonaUpdateComponent } from './zona-update.component';
import { ZonaDeleteDialogComponent } from './zona-delete-dialog.component';
import { zonaRoute } from './zona.route';

@NgModule({
  imports: [ZtlSharedModule, RouterModule.forChild(zonaRoute)],
  declarations: [ZonaComponent, ZonaDetailComponent, ZonaUpdateComponent, ZonaDeleteDialogComponent],
  entryComponents: [ZonaDeleteDialogComponent],
})
export class ZtlZonaModule {}
