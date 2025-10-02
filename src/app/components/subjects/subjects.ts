import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Services } from '../Services/services';

@Component({
  selector: 'app-subjects',
  imports: [RouterLink, MatIcon, MatList, MatListItem, CommonModule],
  templateUrl: './subjects.html',
  styleUrl: './subjects.scss'
})
export class Subjects {
  studentsData: any;
  topper: any = {
    name: '',
    marks: Number.MIN_SAFE_INTEGER
  }
  route = inject(ActivatedRoute);
  studensService = inject(Services);

  constructor(){
    this.route.params.pipe(switchMap((res: any) => this.studensService.getSubjectData(res.subjectName)
    )).subscribe((res: any) => {
      this.studentsData = res;
      this.updateTopper();
    });
  }

  updateTopper() {
    for (let i = 0; i < this.studentsData.length; i++) {
      if (this.topper.marks < this.studentsData[i].marks) {
        this.topper.marks = this.studentsData[i].marks;
      }
    }
  }

}
