
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../user/user';
import { Services } from '../Services/services';
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, User],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  studentsService = inject(Services);
  teachersProfile: any = {};

  constructor(){
    this.studentsService.getTeachersProfile().subscribe(
			(res: any) => {
				this.teachersProfile = res;
			}
		);
  }
}
