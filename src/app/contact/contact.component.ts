import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendContactMessage(this.contactForm.value).subscribe({
        next: () => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        error: () => {
          alert('Failed to send message. Please try again later.');
        }
      });
    }
  }

  sendContactMessage(formData: any) {
    return this.http.post('/api/contact', formData).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return of(null);  // Return an empty observable to handle the error gracefully
      })
    );
  }
}
