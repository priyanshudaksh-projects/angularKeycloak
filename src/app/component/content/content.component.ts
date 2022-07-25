import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AppService } from 'src/app/services/component.service';
import { GlobalConstants } from '../../common/global-constants';


// interface Users {
//   caseNumber:Number,
//   username:String,
//   state:String,
//   createDate:String,
//   lastUpdated:String

// }

interface SearchResults {
  // searchResults:any,
  totalPages:Number,
  totalResults:Number,
  currentPage:Number,
  numberOfRecords:Number
  
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})


export class ContentComponent {
  userName: any;
  secureData: any;
  unsecureData = '';
  agencies:any;

  value:any;
  i=0;
  data:any;
  isShown: boolean = false ;

  totalPages:any;
  totalResults:any;
  currentPage:any;
  numberOfRecords:any
  searchResults:any;
  
  username: string = '';
  

  constructor(
    private router: Router,
    private appService: AppService,
    private keycloakService: KeycloakService
  ) {}

  ngOnInit() {
    // if (localStorage.getItem("logged") !== "true") {
    //   this.router.navigate(["/login"]);
    // }
    // this.userName = localStorage.getItem("user_name");
    const details = this.keycloakService.getKeycloakInstance();
    localStorage.setItem('access_token', details.token || '');
    localStorage.setItem('refresh_token', details.refreshToken || '');
    localStorage.setItem('logged', 'true');
    console.log('getKeycloakInstance', details);
  }

  logoutUser() {
    // localStorage.removeItem("user_name");
    this.keycloakService.logout(GlobalConstants.baseURL);
    localStorage.removeItem('logged');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // this.router.navigate(['/']);
  }

  callSecuredApi() {
    this.isShown = ! this.isShown;
    console.log(this.userName)
    this.appService.callSecureDataApi(this.username).subscribe(
      (data: any) => {
        //this.agencies = <SearchResults[]>data; 
        console.log(data)
        this.totalPages = data.totalPages;
        this.searchResults = data.searchResults;
        this.currentPage = data.currentPage;

       
      },
      (error: any) => {
        console.log('error------', error);
        alert('Session Expired Please login again');
        this.router.navigate(['/']);
      }
    );
  }

  addNewEntry() {
    console.log('Adding new data');
    this.appService.callUnsecureDataApi().subscribe(
      (data: any) => {
        console.log(data);
        alert('Entry Saved')
      },
      (error) => {
        console.log('error ', error);
      }
    );
  }

  nextPage(){
    
  }
  
}
