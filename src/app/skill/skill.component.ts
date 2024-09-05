import { Component } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  readonly skills: Array<Skill> = [
    {
      name: 'Frontend',
      description: 'Technologies used for building user interfaces and client-side logic.',
      items: [
        { name: 'HTML', icon: 'bxl-html5' },
        { name: 'CSS', icon: 'bxl-css3' },
        { name: 'JavaScript', icon: 'bxl-javascript' },
        { name: 'TypeScript', icon: 'bxl-typescript' },
        { name: 'Angular18', icon: 'bxl-angular' },
        { name: 'React', icon: 'bxl-react' },
        { name: 'React Native', icon: 'bxl-react' },
        { name: 'Electron', icon: 'bxl-electron' },
        { name: 'Laravel', icon: 'bxl-laravel' },
      ]
    },
    {
      name: 'Backend',
      description: 'Technologies used for server-side logic, APIs, and database management.',
      items: [
        { name: 'Java 21', icon: 'bxl-java' },
        { name: 'Kotlin', icon: 'bxl-kotlin' },
        { name: 'Spring Boot', icon: 'bxl-spring-boot' },
        { name: 'Spring MVC', icon: 'bxl-spring-boot' }, // Same icon as Spring Boot
        { name: 'Spring Security', icon: 'bxl-spring-boot' }, // Same icon as Spring Boot
        { name: 'JPA', icon: 'bxl-java' }, // Same as Java
        { name: 'Reactive Programming', icon: 'bxl-react' }, // Similar to React
        { name: 'Python', icon: 'bxl-python' },
        { name: 'ExpressJS', icon: 'bxl-nodejs' }, // Using Node.js icon
        { name: 'NodeJS', icon: 'bxl-nodejs' },
      ]
    },
    {
      name: 'Database',
      description: 'Technologies used for storing and managing data.',
      items: [
        { name: 'MySQL', icon: 'bxl-mysql' },
        { name: 'MongoDB', icon: 'bxl-mongodb' },
        { name: 'PostgreSQL', icon: 'bxl-postgresql' },
        { name: 'SQLite', icon: 'bxl-sqlite' }, // Assuming it exists
        { name: 'Firebase', icon: 'bxl-firebase' },
      ]
    }
  ];



}
