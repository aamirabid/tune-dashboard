import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private declare baseUrl: string;
  private declare httpOptions: object;

  constructor(private client: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json; charset=utf-8',
      }),
    }
  }

  get(url: string, params?: any): Observable<any> {
    return this.client
      .get(this.baseUrl + url, { params, ...this.httpOptions })
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }


  post(url: string, params?: any): Observable<any> {
    return this.client
      .post(this.baseUrl + url, params)
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  put(url: string, params?: any): Observable<any> {
    return this.client
      .put(this.baseUrl + url, params, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }

  patch(url: string, params?: any): Observable<any> {
    return this.client
      .patch(this.baseUrl + url, params, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }


  delete(url: string, params?: any): Observable<any> {
    return this.client
      .delete(this.baseUrl + url, { params, ...this.httpOptions })
      .pipe(retry(1), catchError(this.errorHandler.bind(this)));
  }


  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    return throwError(() => {

      alert(message);
      console.log(key,message);
      return error;
    });
  }

}
