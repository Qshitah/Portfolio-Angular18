import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SocialLink } from '../social-link';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @Input({ required: true }) socialLinks: Array<SocialLink> = [];

  skills: Array<string> = ['Nodejs Developer', 'Java Developer', 'Kotlin Developer', 'React Expert', 'AI Enthusiast'];
  title: string = this.skills[0];
  currentSkillIndex = 0;
  intervalId?: number;
  titleAnimationClass: string = 'fade-in';


  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startTitleRotation();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startTitleRotation(): void {
    this.intervalId = window.setInterval(() => {
      this.titleAnimationClass = 'fade-out';
      setTimeout(() => {
        this.currentSkillIndex = (this.currentSkillIndex + 1) % this.skills.length;
        this.title = this.skills[this.currentSkillIndex];
        this.titleAnimationClass = 'fade-in';
      }, 200);
    }, 2000);
  }

}
