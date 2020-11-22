import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZtlSharedModule } from 'app/shared/shared.module';
import { AutorizzazioneComponent } from './autorizzazione.component';
import { AutorizzazioneDetailComponent } from './autorizzazione-detail.component';
import { AutorizzazioneUpdateComponent } from './autorizzazione-update.component';
import { AutorizzazioneDeleteDialogComponent } from './autorizzazione-delete-dialog.component';
import { autorizzazioneRoute } from './autorizzazione.route';

@NgModule({
  imports: [ZtlSharedModule, RouterModule.forChild(autorizzazioneRoute)],
  declarations: [
    AutorizzazioneComponent,
    AutorizzazioneDetailComponent,
    AutorizzazioneUpdateComponent,
    AutorizzazioneDeleteDialogComponent,
  ],
  entryComponents: [AutorizzazioneDeleteDialogComponent],
})
export class ZtlAutorizzazioneModule {}
