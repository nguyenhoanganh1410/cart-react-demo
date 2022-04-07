import { useContext, useRef } from 'react';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { SetCart, SetIncrease } from '../store/Actions';
import Contex from '../store/Context';
const ProductList = () =>{
    const {state, depatch} = useContext(Contex)
    //detructering...
    const {totalProduct, totalPrice, cart} = state



    //xu ly tang so luong sp
    const handlerIncrease = (id) =>{
        //duyệt qua cart -> tăng sô luong sp + 1 bẳng id sản phẩm
      const newCart =  cart.map(item => {
            if(item.id===id){
                 item.amount+=1
            }
            return item
        });
        depatch(SetCart(newCart))
    }
    
    //xu ly giam so luong sp
    const handlerDecrease = (id) =>{
            //duyệt qua cart -> tăng sô luong sp - 1 bẳng id sản phẩm
        const newCart =  cart.map(item => {
                if(item.id===id){
                    item.amount-=1
                }
                return item
            });
            depatch(SetCart(newCart))
    }

    //xoa item khỏi mảng theo id
    const handleRemove = (id) =>{
        const newCart =  cart.filter(item =>{
            return item.id !== id
        })
        depatch(SetCart(newCart))
    }
    return (
        <section className='product-list'>
            <h2>your bag</h2>
            <div>
              
                {cart.map(item => {
                    if(item.amount === 0){
                        return null
                    }
                    return (
                        <article className="cart-item" key={item.id}>
                            <img src={item.img}/>
                            <div className='cart-des'>
                                <h4>{item.title}</h4>
                                <h4 className="item-price">${item.price}</h4>
                                <button className="btn-remove"
                                        onClick={() => handleRemove(item.id)}
                                >remove</button>
                            </div>
                            <div className='cart-amount'>
                                <span className="amount-btn"
                                    onClick={() => handlerDecrease(item.id)}
                                ><AiOutlineLeft /></span>
                                <p className="amount">{item.amount}</p>
                                <span className="amount-btn"
                                    onClick={() => handlerIncrease(item.id)}
                                ><AiOutlineRight /></span>
                            </div>
                         </article>
                    )
                })}
              
            </div>
            <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>total</h4>
                        <h4>${totalPrice}</h4>
                    </div>
                    <button className='btn clear-btn'
                            onClick={() => depatch(SetCart([]))}
                    >clear cart</button>
            </footer>
        </section>
    )
}

export default ProductList