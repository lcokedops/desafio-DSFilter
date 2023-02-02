import ListingItem from "../ListingItem";
import * as ProductService from "../../services/product-service";
import { ProductDTO } from "../../models/product";

const products: ProductDTO[] = ProductService.findByPrice(0, 1000);

export default function ListingCard() {

    return (
        <div className="card">
            {
                products.map(product => (
                    <ListingItem key={product.id} product={product}/>
                ))
            }
        </div>
    );
}