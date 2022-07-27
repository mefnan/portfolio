import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProjectsComponent } from './video-projects.component';

describe('VideoProjectsComponent', () => {
  let component: VideoProjectsComponent;
  let fixture: ComponentFixture<VideoProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
