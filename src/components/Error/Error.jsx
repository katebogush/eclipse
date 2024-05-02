import './Error.css';
import {Link} from 'react-router-dom';


export default function ErrorPage(){
     return(
        <div className='ErrorPage'>
            <h1>404</h1>
            <p>Ой, щось пішло не так </p>
            <Link to="/">повернутись на головну</Link>
        </div>
     )
}