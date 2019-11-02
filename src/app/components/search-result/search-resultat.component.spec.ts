import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultatComponent } from './search-resultat.component';

describe('SearchResultatComponent', () => {
  let component: SearchResultatComponent;
  let fixture: ComponentFixture<SearchResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
