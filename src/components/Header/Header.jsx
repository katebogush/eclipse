import './Header.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className='header'>
            <h1>Eclipse-lingerie</h1>
            <Link to="/">
                <div className='logo'></div>
            </Link>
            <p>0 800 524 09 09</p>
            <p>з 9:00 до 18:00</p>
        </div>
    )
}