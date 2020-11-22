import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tipologia-zona',
        loadChildren: () => import('./tipologia-zona/tipologia-zona.module').then(m => m.ZtlTipologiaZonaModule),
      },
      {
        path: 'varco',
        loadChildren: () => import('./varco/varco.module').then(m => m.ZtlVarcoModule),
      },
      {
        path: 'gruppo-varchi',
        loadChildren: () => import('./gruppo-varchi/gruppo-varchi.module').then(m => m.ZtlGruppoVarchiModule),
      },
      {
        path: 'tipologia-veicolo',
        loadChildren: () => import('./tipologia-veicolo/tipologia-veicolo.module').then(m => m.ZtlTipologiaVeicoloModule),
      },
      {
        path: 'festivita',
        loadChildren: () => import('./festivita/festivita.module').then(m => m.ZtlFestivitaModule),
      },
      {
        path: 'regola-oraria',
        loadChildren: () => import('./regola-oraria/regola-oraria.module').then(m => m.ZtlRegolaOrariaModule),
      },
      {
        path: 'profilo-orario',
        loadChildren: () => import('./profilo-orario/profilo-orario.module').then(m => m.ZtlProfiloOrarioModule),
      },
      {
        path: 'autorizzazione',
        loadChildren: () => import('./autorizzazione/autorizzazione.module').then(m => m.ZtlAutorizzazioneModule),
      },
      {
        path: 'zona',
        loadChildren: () => import('./zona/zona.module').then(m => m.ZtlZonaModule),
      },
      {
        path: 'tipologia-permesso',
        loadChildren: () => import('./tipologia-permesso/tipologia-permesso.module').then(m => m.ZtlTipologiaPermessoModule),
      },
      {
        path: 'durata-costo',
        loadChildren: () => import('./durata-costo/durata-costo.module').then(m => m.ZtlDurataCostoModule),
      },
      {
        path: 'motivazione',
        loadChildren: () => import('./motivazione/motivazione.module').then(m => m.ZtlMotivazioneModule),
      },
      {
        path: 'calendarizzazione',
        loadChildren: () => import('./calendarizzazione/calendarizzazione.module').then(m => m.ZtlCalendarizzazioneModule),
      },
      {
        path: 'test-x',
        loadChildren: () => import('./test-x/test-x.module').then(m => m.ZtlTestXModule),
      },
      {
        path: 'permesso-temporaneo',
        loadChildren: () => import('./permesso-temporaneo/permesso-temporaneo.module').then(m => m.ZtlPermessoTemporaneoModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class ZtlEntityModule {}
