import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Services, Student } from '../Services/services';

@Component({
  selector: 'app-all-students',
  imports: [MatIcon, MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent,
  MatDivider, MatCardActions, CommonModule, RouterLink
  ],
  templateUrl: './all-students.html',
  styleUrl: './all-students.scss'
})
export class AllStudents {
  private studentService = inject(Services);

  // Use async pipe instead of manual subscription
  students$: Observable<Student[]> = this.studentService.getAllStudents();

}
