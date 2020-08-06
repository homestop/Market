import { Order } from '../../core/models/order.model';
import { Product } from '../../core/models/product.model';


export class SendHelper {
    public static processOrder(order: Order, cartItem: Array<Product>): Order {
        const firstLastName = document.getElementById('firstLastNameId') as HTMLInputElement;
        const email = document.getElementById('emailInputId') as HTMLInputElement;
        const phone = document.getElementById('phoneId') as HTMLInputElement;
        const shippingAddress = document.getElementById('shippingAddressId') as HTMLInputElement;

        order = new Order();
        order.products = cartItem.map(x => x.id);
        order.firstLastName = firstLastName.value;
        order.email = email.value;
        order.phone = phone.value;
        order.shippingAddres = shippingAddress.value;

        return order;
    }
}
