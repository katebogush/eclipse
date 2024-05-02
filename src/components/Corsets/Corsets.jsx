import './Corsets.css';
import ItemsList from '../ItemsList/ItemsList';

export default function Corsets(){

    return(
        <div className='corsets'>
            <h1>Вона пройшла як королева!</h1>
            <p>Горда постава, впевнений привабливий погляд: хочете, щоб ці слова ставилися до вас? Тоді обов'язково треба поповнити 
                свій гардероб всього-навсього одним предметом одягу – корсетом. Саме він вміє перетворити жінку навіть з неідеальною
                 фігурою в королеву.</p>
            <p>Спочатку цей предмет жіночого туалету могли дозволити собі тільки особи знатного роду, адже коштували вони дуже 
                дорого. Тепер купити корсет може будь-яка представниця слабкої статі, яка бажає підкреслити свою індивідуальність.
                 Сучасні модельєри пропонують величезний вибір моделей корсетів. Київ - це колиска української моди і наші 
                 співвітчизники знають толк в жіночій красі.</p>
            { <ItemsList /> }
        </div>
    )
}