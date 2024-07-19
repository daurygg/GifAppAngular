import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifscard.component.html',
  styleUrl: './gifscard.component.css'
})
export class GifscardComponent  implements OnInit{
  @Input()
  gif!: Gif;
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
