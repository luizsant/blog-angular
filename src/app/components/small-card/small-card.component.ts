import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() title: string | undefined; // Essa entrada para o título
  @Input() summary: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
