import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOperationComponent } from './save-operation.component';

describe('SaveOperationComponent', () => {
  let component: SaveOperationComponent;
  let fixture: ComponentFixture<SaveOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaveOperationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
