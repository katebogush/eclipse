import './Sidebar.css';
import {NavLink} from 'react-router-dom';

export default function Sidebar(){
    return(
        <div className='sidebar'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/corsets">Корсети</NavLink>
                </li>
                <li>
                    <NavLink to="/penuary">Пеньюари</NavLink>
                </li>
                <li>
                    <NavLink to="/kupalniki">Купальники</NavLink>
                </li>
                <li>
                    <NavLink to="/panchohu">Панчохи</NavLink>
                </li>
                <li>
                    <NavLink to="/costums">Костюми</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    )
    
}

