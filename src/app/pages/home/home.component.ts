import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bigCardData: any;
  smallCardsData: any[] = [];

  ngOnInit(): void {
    if (dataFake.length > 0) {
      this.bigCardData = dataFake[0]; // Primeiro item para o big card
      this.smallCardsData = dataFake.slice(1, 5); // Próximos 4 itens para small cards
    }
  }
}
