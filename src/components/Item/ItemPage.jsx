import {Link, useLoaderData} from 'react-router-dom';
import './ItemPage.css';

export default function ItemPage(){

    const product = useLoaderData();
    console.log(product)

    return(
        <div className="ItemPage">
            <div>
                <Link to='/corsets'>Назад</Link>
            </div>
            <h1>{product.name}</h1>
            <p> ціна : {product.price}</p>
        </div>
    )
}