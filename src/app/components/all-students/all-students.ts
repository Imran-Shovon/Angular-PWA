import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Services } from '../Services/services';

@Component({
  selector: 'app-all-students',
  imports: [MatIcon, MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent,
  MatDivider, MatCardActions
  ],
  templateUrl: './all-students.html',
  styleUrl: './all-students.scss'
})
export class AllStudents {
  students: any = [{name:"a"}, {name: "b"}];
  studentService = inject(Services);

  constructor(){
    this.studentService.getAllStudents().subscribe(
      (res: any) => {
        this.students = res;
      }
    )
  }

}
