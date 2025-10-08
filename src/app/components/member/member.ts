import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-member',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './member.html',
  styleUrls: ['./member.scss'],
})
export class Member {
  displayedColumns: string[] = ['no', 'name', 'email'];
  dataSource = [
    { no: 1, name: 'ขยัน คงรวย', email: 'Khngrwyzaza@gmail.com' },
    { no: 2, name: 'ขี้เกียจ ยากจน', email: 'LazyPoor@example.com' }
  ];
}



