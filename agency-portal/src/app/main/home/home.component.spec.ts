import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element, de;

  //set-up
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  //set-up
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;  //access properties and methods
    element = fixture.nativeElement;        //access DOM element
    de = fixture.debugElement;              //test helper
    fixture.detectChanges();
  });


  //specs
  it('should render `Hello JM!`', async(() => {
        component.name = 'JM';
        //trigger change detection
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(element.querySelector('h1').innerText).toBe('Hello JM!');
        });

  }));
});
