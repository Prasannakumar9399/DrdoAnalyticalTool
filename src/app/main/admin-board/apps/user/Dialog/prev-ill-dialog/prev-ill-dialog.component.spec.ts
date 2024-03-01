import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevIllDialogComponent } from './prev-ill-dialog.component';

describe('PrevIllDialogComponent', () => {
  let component: PrevIllDialogComponent;
  let fixture: ComponentFixture<PrevIllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevIllDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevIllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
