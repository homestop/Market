import { Product } from './product.model';

export class Order {

  constructor(
    products: Array<number>,
    firstLastName: string,
    email: string,
    phone: string,
    shippingAddres: string
  ) {
    this.products = products;
    this.firstLastName = firstLastName;
    this.email = email;
    this.phone = phone
    this.shippingAddres = shippingAddres;
  }

    products: Array<number>; //Product ID
    firstLastName: string;
    email: string;
    phone: string;
    shippingAddres: string;
}
