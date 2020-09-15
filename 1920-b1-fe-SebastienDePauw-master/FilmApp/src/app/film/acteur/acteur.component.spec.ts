/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActeurComponent } from './acteur.component';

describe('ActeurComponent', () => {
  let component: ActeurComponent;
  let fixture: ComponentFixture<ActeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
