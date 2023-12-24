import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '0';
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id.toString() === id)[0];
    if (result) {
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    } else {
      // Lógica para quando o artigo não é encontrado
      // Por exemplo, você pode definir valores padrão ou mostrar uma mensagem
    }
  }
}
