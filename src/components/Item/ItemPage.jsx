import {Link} from 'react-router-dom';
import './ItemPage.css';

export default function ItemPage(){
    return(
        <div className="ItemPage">
            <div>
                <Link to='/corsets'>Назад</Link>
            </div>
            <h1>Заголовок</h1>
            <p>тут опис товару</p>
        </div>
    )
}