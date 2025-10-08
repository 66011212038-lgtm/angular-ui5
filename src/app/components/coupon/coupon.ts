import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-coupon',
  imports: [MatIconModule, MatInputModule,MatButtonModule],
  templateUrl: './coupon.html',
  styleUrl: './coupon.scss'
})
export class Coupon {

}
