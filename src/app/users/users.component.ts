import { Component, OnInit  } from '@angular/core';
import { UsersServicesService } from '../users-services.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
    user: any[] = [];
    
    constructor(private usersservicesservice : UsersServicesService) {}

    ngOnInit(): void {
        this.usersservicesservice.getUsers().subscribe(data => {
          this.user = data;
          console.log(this.user);
        });


        this.usersservicesservice.postUsers(URL).subscribe(data => {
          this.user = data;
          console.log(this.user);
        });


        this.usersservicesservice.updateUsers(URL).subscribe(data => {
          this.user = data;
          console.log(this.user);
        });


        this.usersservicesservice.delete(URL).subscribe(data => {
          this.user = data;
          console.log(this.user);
        });
    }

  
}