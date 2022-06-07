import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError, last } from 'rxjs';
import { GithubInterface } from './github-interface';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseURL: string = "https://api.github.com/";
 
  constructor(private http: HttpClient) {
  }
 
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName)
  }
}
