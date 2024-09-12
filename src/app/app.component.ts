import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'students-details-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, NgbHighlight],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'students-details';
  filter: FormControl;
  students: Array<any> = [
    {
      name: 'Arun',
      city: 'Ooty',
      studentImage:
        'https://cdn.pixabay.com/photo/2024/06/29/20/51/ai-generated-8862067_640.jpg',
      state: 'TN',
      country: 'India',
      physics: '90',
      chemistry: '92',
      maths: '94',
      computer: '96',
    },
    {
      name: 'Dinesh',
      city: 'Coonoor',
      studentImage:
        'https://cdn.pixabay.com/photo/2024/06/29/20/51/ai-generated-8862067_640.jpg',
      state: 'TN',
      country: 'India',
      physics: '80',
      chemistry: '82',
      maths: '84',
      computer: '86',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.filter = this.fb.control('', { nonNullable: true });
  }
}
