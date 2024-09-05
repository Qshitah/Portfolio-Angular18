import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutText = `
  An accomplished Full Stack Developer with extensive experience in high-level
frameworks and technologies. Proficient in backend development using Java/
Kotlin Spring Boot with JPA and Reactive programming, and adept in frontend
development with React.js, React Native, and Electron. Skilled in developing
robust web applications using Laravel PHP and leveraging Python for AI
development. Proven ability to deliver comprehensive solutions from concept to
deployment, ensuring seamless integration and optimal performance.
  `;
}
