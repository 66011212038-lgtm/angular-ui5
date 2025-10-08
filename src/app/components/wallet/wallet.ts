import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,CommonModule],
  templateUrl: './wallet.html',
  styleUrl: './wallet.scss'
})
export class Wallet {
 showCustomAmount = false; 

 openCustomAmount() {
    console.log('เปิด popup'); // ✅ ทดสอบว่า method ทำงาน
    this.showCustomAmount = true;
  }


  closeCustomAmount() {
    this.showCustomAmount = false;
  }

}
