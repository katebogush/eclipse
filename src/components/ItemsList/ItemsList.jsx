import './ItemsList.css';
import {Link} from 'react-router-dom';

export default function ItemsList(){
    return(
        <div className='itemList'>
            <ul>
                <li>
                    <div className='ItemId'>
                        <Link to='/corsets/LC7532'><div className='ItemFoto'></div></Link>
                        <p>опис товару</p>
                        <p>ціна</p>
                    </div>
                </li>
                <li>
                    <div className='ItemId'>
                        <Link to='/corsets/LC1235'><div className='ItemFoto'></div></Link>
                        <p>опис товару</p>
                        <p>ціна</p>
                    </div>
                </li>
                <li>
                    <div className='ItemId'>
                        <Link to='/corsets/LC3745'><div className='ItemFoto'></div></Link>
                        <p>опис товару</p>
                        <p>ціна</p>
                    </div>
                </li>
                <li>
                    <div className='ItemId'>
                        <Link to='/corsets/LC2003'><div className='ItemFoto'></div></Link>
                        <p>опис товару</p>
                        <p>ціна</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}