import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToDoComponent } from './view-to-do.component';

describe('ViewToDoComponent', () => {
  let component: ViewToDoComponent;
  let fixture: ComponentFixture<ViewToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
