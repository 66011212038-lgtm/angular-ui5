import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GameService } from '../../services/api/game';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,CommonModule,FormsModule],
  templateUrl: './wallet.html',
  styleUrl: './wallet.scss'
})
export class Wallet {

  constructor(private http: HttpClient, private GameService: GameService, private router: Router) {}

  
 showCustomAmount = false; 

 openCustomAmount() {
    console.log('เปิด popup'); // ✅ ทดสอบว่า method ทำงาน
    this.showCustomAmount = true;
  }


  closeCustomAmount() {
    this.showCustomAmount = false;
  }

amount: number = 0;
transactionType: number = 1;
latestTransaction: any;

async submitTransaction() {
  const data = {
    amount: this.amount,
    transaction_status: this.transactionType
  };

  console.log("ข้อมูลที่จะส่งไป backend:", data);

  const res = await this.GameService.addTransaction(data);
  console.log("ผลลัพธ์จาก backend:", res);

  this.latestTransaction = res;
}





}
