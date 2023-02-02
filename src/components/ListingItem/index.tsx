import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function ListingItem({ product }: Props) {
    return (
        <div className="listing-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    );
}