import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-edit-game',
  imports: [MatToolbar, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatSelectModule],
  templateUrl: './edit-game.html',
  styleUrl: './edit-game.scss'
})
export class EditGame {

}
