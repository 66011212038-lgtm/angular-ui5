import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIcon,FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
