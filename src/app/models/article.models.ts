// app/models/article.model.ts

export interface Article {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    isOnSale: boolean;
    quantityInCart: number;
  }
  