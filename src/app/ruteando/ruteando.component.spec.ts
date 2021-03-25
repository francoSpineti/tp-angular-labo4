import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuteandoComponent } from './ruteando.component';

describe('RuteandoComponent', () => {
  let component: RuteandoComponent;
  let fixture: ComponentFixture<RuteandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuteandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuteandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
