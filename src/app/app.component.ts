import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SocialLink } from './social-link';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SkillComponent } from "./skill/skill.component";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, SkillComponent, WorkComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  readonly socialLinks: Array<SocialLink> = [
    { platform: 'github', link: 'https://github.com/Qshitah', iconClass: 'bx bxl-github' },
    { platform: 'linkedin', link: 'https://www.linkedin.com/in/marouan-akechtah-590174196/', iconClass: 'bx bxl-linkedin' }
  ];


}
