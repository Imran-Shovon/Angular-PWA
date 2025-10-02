import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {
  http = inject(HttpClient);

  getTeachersProfile(){
    return this.http.get('http://localhost:3000/teachers');
  }

  getSubjectData(subjectName: string){
    return this.http.get(`http://localhost:3000/subjects/${subjectName}`);
  }

  getAllStudents(){
    return this.http.get('http://localhost:3000/students');
  }
  
}
