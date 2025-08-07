import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersServicesService } from '../users-services.service';
import { Target } from '@angular/compiler';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  Users =
    {
      fullName: '',
      gender: '',
      age: '',
      address: '',
      email: '',
      fitnessGoal: '',
    }

  user: any[] = [];

  constructor(private usersservicesservice: UsersServicesService) { }

  ngOnInit(): void {
    this.usersservicesservice.getUsers().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });


    // this.usersservicesservice.postUsers(URL).subscribe(data => {
    //   this.user = data;
    //   console.log(this.user);
    // });


    // this.usersservicesservice.updateUsers(URL).subscribe(data => {
    //   this.user = data;
    //   console.log(this.user);
    // });         

  }
  updatefullName(event: any) {
    this.Users.fullName = event.target.value;
  };

  updategender(event: any) {
    this.Users.gender = event.target.value;
  };

  updateage(event: any) {
    this.Users.age = event.target.value;
  };

  updateaddress(event: any) {
    this.Users.address = event.target.value;
  };

  updateemail(event: any) {
    this.Users.email = event.target.value;
  };

  updatefitnessGoal(event: any) {
    this.Users.fitnessGoal = event.target.value;
  }

  onsubmit() {
    this.usersservicesservice.postUsers(this.Users).subscribe(data => {
      console.log(data);
    });
  }

}