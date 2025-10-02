import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  studentName: string;
  marks: number;   // ✅ add marks here since subjects have marks
}


@Injectable({
  providedIn: 'root'
})
export class Services {
  http = inject(HttpClient);

  getTeachersProfile(): Observable<any>	{
		return this.http.get("http://localhost:3000/teacherProfile");
	}

	getSubjectData(subjectName: string): Observable<any> {
		return this.http.get("http://localhost:3000/"+subjectName);
	}

	getAllStudents(): Observable<any> {
		return this.http.get("http://localhost:3000/allStudents");
	}
  
}
