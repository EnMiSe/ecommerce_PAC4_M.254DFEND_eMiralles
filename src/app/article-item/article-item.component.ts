import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-article-item',
  standalone: false,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})

export class ArticleItemComponent implements OnInit {
  public article: Article;

  ngOnInit(){
    name: 'Smart watch';
    price: 199.99;
    imageUrl: 'assets\smartwatch.png'; 
    isOnSale: true;
    quantityInCart: 0;
  }
  
  constructor(){
    this.article = {
      name: '',
      imageUrl: '',
      price: 0,
      isOnSale: false,
      quantityInCart: 0
    };
  }

  increment() {
    this.article.quantityInCart++;
  }

  decrement() {
    if (this.article.quantityInCart > 0) {
        this.article.quantityInCart--;
    }
  }
}

