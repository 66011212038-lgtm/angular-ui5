import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-profile-admin',
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './profile-admin.html',
  styleUrl: './profile-admin.scss'
})
export class ProfileAdmin {

}
