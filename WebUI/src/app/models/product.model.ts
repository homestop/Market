import { Image } from './image.model';

export class Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  in_stock: boolean;
  images: Image;
}
