import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PressKitPageComponent} from './press-kit-page.component';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LogoDownloadComponent} from '../logo-download/logo-download.component';
import {CompanyColorComponent} from '../company-color/company-color.component';

describe('PressKitPageComponent', () => {
  let component: PressKitPageComponent;
  let fixture: ComponentFixture<PressKitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PressKitPageComponent,
        LogoDownloadComponent,
        CompanyColorComponent
      ],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressKitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});