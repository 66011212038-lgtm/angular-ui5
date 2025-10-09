import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-homepage',
  imports: [RouterModule,NgbCarouselModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {


}