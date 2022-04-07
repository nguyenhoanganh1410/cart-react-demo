import { useContext } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import Contex from '../store/Context';
const Header = () =>{
    const {state, depatch} = useContext(Contex)
    //detructering...
    const {totalProduct, totalPrice, cart} = state
    return (
        <header>
            <nav>
                <div className="header_left"><h3>UseReducer</h3></div>
                <div className="header_right">
                    <span className="icon"><BsFillBagFill /></span>
                    <div className="number">
                        <span >{totalProduct}</span>

                    </div>
                </div>

            </nav>
        </header>
    )
}


export default Header