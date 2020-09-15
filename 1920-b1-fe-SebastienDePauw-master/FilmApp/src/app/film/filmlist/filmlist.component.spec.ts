/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilmlistComponent } from './filmlist.component';

describe('FilmlistComponent', () => {
  let component: FilmlistComponent;
  let fixture: ComponentFixture<FilmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
