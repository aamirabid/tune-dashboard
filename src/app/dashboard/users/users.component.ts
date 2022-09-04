import { UserDashboardService } from './../../services/http/user-dashboard/user-dashboard.service';
import { UserModel } from 'src/app/models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:UserModel.User[]=[];
  constructor(private userService:UserDashboardService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getDataSorted(value:any):void{
    switch (value) {
      case '0':
        this.users=this.users.sort((a, b) => (a.name < b.name ? -1 : 1));
        break;
      case '1':
        this.users=this.users.sort((a, b) => (a.totalImpression > b.totalImpression ? -1 : 1));
        break;
      case '2':
        this.users=this.users.sort((a, b) => (a.totalConversions > b.totalConversions ? -1 : 1));
        break;
      case '3':
        this.users=this.users.sort((a, b) => (a.totalRevenue > b.totalRevenue ? -1 : 1));
        break;
    }
  }

  private getUsers():void{
    const usersList=localStorage.getItem('users');
    if(usersList){
      this.users=JSON.parse(usersList)
    }else{
      this.userService.getUsers().subscribe({
        next: async(users:UserModel.UserJson[])=>{
          this.userService.getUserLogs().subscribe({
            next: async(logs:UserModel.LogJson[])=>{
              users.forEach((user:UserModel.UserJson)=>{
                let item:UserModel.User={
                  ...user,
                  type:'conversion',
                  conversion:[],
                  totalConversions:0,
                  totalImpression:0,
                  totalRevenue:0
                };
                logs.forEach((log:UserModel.LogJson)=>{
                  if(log.user_id==user.id){
                    item.totalRevenue+=log.revenue;

                    if(log.type=='conversion'){
                      item.totalConversions+=1;
                    }
                    if(log.type=='impression'){
                      item.totalImpression+=1;
                    }

                    const perDay:any=[]
                    const date = log.time.split(' ')[0];
                    if(item.conversion.length < 30){
                      if (perDay.includes(date)) {
                        item.conversion[perDay.indexOf(date)]+=item.totalConversions/item.totalImpression;
                      }else{
                        perDay.push(date);
                        item.conversion.push(item.totalConversions/item.totalImpression);
                      }
                    }
                  }

                });
                item.totalRevenue=Number(item.totalRevenue.toFixed(2))
                this.users.push(item)
              });
              localStorage.setItem('users',JSON.stringify(this.users));
            }
          })
        }
      });
    }
  }
}
