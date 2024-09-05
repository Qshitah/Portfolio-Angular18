import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {

  @Input({required:true}) link: string = '';



}
