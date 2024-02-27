import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerListingComponent } from './server-listing.component';

describe('ServerListingComponent', () => {
  let component: ServerListingComponent;
  let fixture: ComponentFixture<ServerListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
