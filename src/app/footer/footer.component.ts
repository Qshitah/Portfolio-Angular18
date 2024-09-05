import { Component, Input } from '@angular/core';
import { SocialLink } from '../social-link';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

@Input({required: true}) socialLinks: Array<SocialLink> = [];

}
