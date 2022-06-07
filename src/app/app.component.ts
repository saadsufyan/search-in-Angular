import { Component, OnInit } from '@angular/core';
import { repos } from './shared/repos';
import { RestApiService } from './shared/rest-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  userName: string = "muzzammil194"
  repos: repos[] | undefined;
 
  loading: boolean = false;
  errorMessage: string | undefined;
 
  constructor(private githubService: RestApiService) {
  }
 
  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {                           
          console.log('response received')
          let x=[];
          x.push(response)
          this.repos = x; 
        },
        (error) => {                              
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   
          console.error('Request completed')       
          this.loading = false; 
        })
  }
}
