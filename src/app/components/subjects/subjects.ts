import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Services, Student } from '../Services/services';

@Component({
  selector: 'app-subjects',
  imports: [RouterLink, MatIcon, MatList, MatListItem, CommonModule],
  templateUrl: './subjects.html',
  styleUrls: ['./subjects.scss']
})
export class Subjects {
  private route = inject(ActivatedRoute);
  private studentService = inject(Services);

  // Observable for students data
  studentsData$: Observable<Student[]> = this.route.params.pipe(
    switchMap(params => this.studentService.getSubjectData(params['subjectName']))
  );

  // Observable for topper
  topper$: Observable<Student | null> = this.studentsData$.pipe(
    map(students => {
      if (!students || students.length === 0) return null;
      return students.reduce((top, s) => s.marks > top.marks ? s : top, students[0]);
    })
  );

}
