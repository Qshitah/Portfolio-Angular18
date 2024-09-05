import { Component, Input } from '@angular/core';
import { LinkComponent } from "../link/link.component";
import { Menu } from '../menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({ required: true }) linkedinLink: string = '';

  readonly menu : Array<Menu> = [
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Skills'
    },
    {
      name: 'Work'
    },
    {
      name: 'Contact'
    }
  ];
}
