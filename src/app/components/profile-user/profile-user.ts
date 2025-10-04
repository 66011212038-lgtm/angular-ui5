import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-user',
  imports: [MatCardModule,MatButtonModule,MatIconModule,RouterModule,NgbModule],
  templateUrl: './profile-user.html',
  styleUrl: './profile-user.scss'
})
export class ProfileUser {
  constructor( private router : Router ){}
}
