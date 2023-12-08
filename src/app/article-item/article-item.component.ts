import { Component } from '@angular/core';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  name: string = 'Smart watch';
  price: number = 199.99;
  imageUrl: string = 'src\assets\smartwatch.png'; 
  isOnSale: boolean = true;
  quantityInCart: number = 0;

    increment() {
      this.quantityInCart++;
  }

  decrement() {
      if (this.quantityInCart > 0) {
          this.quantityInCart--;
      }
  }
}

