import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { ZtlTestModule } from '../../../test.module';
import { TipologiaPermessoComponent } from 'app/entities/tipologia-permesso/tipologia-permesso.component';
import { TipologiaPermessoService } from 'app/entities/tipologia-permesso/tipologia-permesso.service';
import { TipologiaPermesso } from 'app/shared/model/tipologia-permesso.model';

describe('Component Tests', () => {
  describe('TipologiaPermesso Management Component', () => {
    let comp: TipologiaPermessoComponent;
    let fixture: ComponentFixture<TipologiaPermessoComponent>;
    let service: TipologiaPermessoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ZtlTestModule],
        declarations: [TipologiaPermessoComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                defaultSort: 'id,asc',
              }),
              queryParamMap: of(
                convertToParamMap({
                  page: '1',
                  size: '1',
                  sort: 'id,desc',
                })
              ),
            },
          },
        ],
      })
        .overrideTemplate(TipologiaPermessoComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TipologiaPermessoComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TipologiaPermessoService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new TipologiaPermesso(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.tipologiaPermessos && comp.tipologiaPermessos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new TipologiaPermesso(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.tipologiaPermessos && comp.tipologiaPermessos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      comp.ngOnInit();
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // INIT
      comp.ngOnInit();

      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
