import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterListModalPage } from './printer-list-modal.page';

describe('PrinterListModalPage', () => {
  let component: PrinterListModalPage;
  let fixture: ComponentFixture<PrinterListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterListModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
