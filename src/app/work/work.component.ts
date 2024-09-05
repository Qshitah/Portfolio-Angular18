import { Component } from '@angular/core';
import { Work } from '../work';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  readonly works: Array<Work> = [
    {
    name: 'Java Development Internship',
    link: 'https://www.nttdata.com',
    image: 'images/ntt_data.png',
    description: `NTT DATA [ 01/04/2024 – 01/06/2024 ]
    City: Tetouan | Country: Morocco
    Converted JSON CV Europass data to Java Spring Boot applications, employing Hibernate/JPA or Reactive R2DBC with PostgreSQL database integration. Passionate about crafting efficient solutions and exploring the latest in tech. Let's connect and chat tech!`
  },
  {
    name: 'Commercial Agent/Full Stack Developer',
    link: 'https://www.akenord.ma',
    image: 'images/akenord.png',
    description: `AKENORD s.a.r.l [ 01/06/2021 – 01/09/2023 ]
    City: Tanger | Country: Morocco
    Full Stack Developer role encompassing the development of web applications and systems integration. Experience with managing projects and coordinating with teams to deliver high-quality software solutions.`
  },
  {
    name: 'Responsable en Transport',
    link: 'https://www.telecontact.ma/annonceur/st-aberchan-de-transport-national-et-international-satrani/3034535/tanger.php',
    image: 'images/satrani.jpg',
    description: `SATRANI s.a.r.l [ 01/03/2021 – 01/06/2021 ]
    City: Tanger | Country: Morocco
    • Organized and optimized the transport of goods from a logistics platform.
    • Negotiated with site carriers and optimized routes to reduce the number of kilometers traveled and CO2 emissions.
    • Ensured compliance with delivery schedules and transport legislation.
    • Managed budget and resources efficiently.`
  },
  {
    name: 'Forwarding Agent',
    link: 'https://www.algomtl.com/sotan',
    image: 'images/sotan.jpg',
    description: `SOTAN s.a.r.l [ 01/03/2020 – 01/06/2020 ]
    City: Tanger | Country: Morocco
    • Controlled loads including product quality and partial loads.
    • Managed the declaration of BADR orders and entry of shipments.`
  }
];

}
