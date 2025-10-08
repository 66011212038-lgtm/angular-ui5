import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-trolley',
  imports: [MatIconModule,MatSelectModule,MatButtonModule],
  templateUrl: './trolley.html',
  styleUrl: './trolley.scss'
})
export class Trolley {

}
