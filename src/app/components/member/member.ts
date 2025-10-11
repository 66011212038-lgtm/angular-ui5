import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { GameService } from '../../services/api/game';
import { GameGetRes } from '../../model/Game_gat_tes';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './member.html',
  styleUrls: ['./member.scss'],
})
export class Member {
  constructor(private http: HttpClient, private GameService: GameService, private router: Router) {}
   displayedColumns: string[] = ['no', 'name', 'email'];

  member: GameGetRes[] = [];
  
 async ngOnInit() {
    try {
      this.member = await this.GameService.member();
      console.log(this.member);
    } catch (err) {
      console.error('Error fetching member:', err);
    }
  }
  
}



