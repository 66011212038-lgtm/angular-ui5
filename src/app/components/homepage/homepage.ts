import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../../services/api/game';
import { GameGetRes } from '../../model/Game_gat_tes';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, NgbCarouselModule, CommonModule, FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  constructor(private http: HttpClient, private GameService: GameService, private router: Router) {}
  // searchgame:string = "";
  // game: GameGetRes [] = [];
  // async search(){
  //   console.log(this.searchgame)
  //   const res = await this.GameService.searchgame(this.searchgame);
  //   console.log("game",res);

  // }

  searchgame: string = '';
  searchtype: string = '';
  game: GameGetRes[] = [];

  async search() {
    console.log(this.searchgame, this.searchtype);
    const res = await this.GameService.searchgame(this.searchgame, this.searchtype);
    console.log('game', res);
    this.game = res;
  }


  gamegame: GameGetRes[] = [];

async ngOnInit() {
  
  const res = await this.GameService.gamepage();
  this.gamegame = res;
  console.log(this.gamegame);
   // เช็คว่าข้อมูลมาถึงหรือไม่
}

}
