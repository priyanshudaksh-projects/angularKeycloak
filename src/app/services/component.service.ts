import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private REST_API_SERVER_SECURE = 'https://api-am.cocimexanpilot.org/api/v1/search';
  private REST_API_SERVER_UNSECURE = 'https://dev.cocimexanpilot.org/api/v1/missingpersondocument';
  private REST_API_SERVER_LOGIN = GlobalConstants.apiURL + '/api/v1/login';

  constructor(private httpClient: HttpClient) {}

  public sendPostRequest(data: any) {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.httpClient.post(
      this.REST_API_SERVER_LOGIN,
      data,
      requestOptions
    );
  }

  callSecureDataApi(body: any) {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + localStorage.getItem('access_token'),
    };

    
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.httpClient.post(this.REST_API_SERVER_SECURE, body, requestOptions);
  }

  callUnsecureDataApi() {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + localStorage.getItem('access_token'),
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.httpClient.post(this.REST_API_SERVER_UNSECURE,  requestOptions);
  }
}
