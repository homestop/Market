import { Product } from './product.model';

export class Order {
  constructor() {
  }
    products: Array<number>; // Product ID
    firstLastName: string;
    email: string;
    phone: string;
    shippingAddres: string;
}
