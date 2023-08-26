import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFrameComponent } from './hello-frame.component';

describe('HelloFrameComponent', () => {
  let component: HelloFrameComponent;
  let fixture: ComponentFixture<HelloFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloFrameComponent]
    });
    fixture = TestBed.createComponent(HelloFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
