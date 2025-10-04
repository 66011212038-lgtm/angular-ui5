import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatInput } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-order',
  imports: [MatIconModule, MatSelectModule, MatInput,MatButtonModule],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order {

}
