import { UserModel } from 'src/app/models/User';
import { Observable, map } from 'rxjs';
import { HttpService } from '../master/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private http:HttpService ) { }

  getUsers(data?: any): Observable<UserModel.UserJson[]> {
    return this.http.get('users.json',data).pipe(map(data => data as UserModel.UserJson[]));
  }

  getUserLogs(data?: any): Observable<UserModel.LogJson[]> {
    return this.http.get('logs.json',data).pipe(map(data => data as UserModel.LogJson[]));
  }
}
