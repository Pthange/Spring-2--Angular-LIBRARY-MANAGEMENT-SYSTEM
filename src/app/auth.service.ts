
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Student } from './Student';

const AUTH_API = 'http://localhost:8086/user/';
const REGISTER_API = 'http://localhost:8086/api/';
// const getInstructor_API="http://localhost:8086/api/";
// const REGISTER_COURSE="http://localhost:8086/api/";
// const GetCourse="http://localhost:8086/api/";
 const updateIns="http://localhost:8086/api/updateInstructor";
 const getInsbyId="http://localhost:8086/api/getInstructorById";
 const deleteIns="http://localhost:8086/api/deleteInstructor";
 const assign="http://localhost:8086/api/assignInstructor";
 const displayByName="http://localhost:8086/api/getCourseByTitle";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
export class AuthService {
    constructor(private http: HttpClient) { }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      userName: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(student: Student): Observable<Object> {
    return this.http.post<any>(REGISTER_API + 'createInstructor',
    student, httpOptions);
  }

  getAllStudent(): Observable<Student[]>
  {
   return this.http.get<Student[]>(REGISTER_API+'getAllInstructors',
   httpOptions);
  }
  
getDataByTitle(title: any): Observable<Object>{

  return this.http.get(`${displayByName}/${title}`);
 }

}
