import {useCart, useCartBtn} from "@store";
import t from '@css/app.module.scss'

export const CartBtn = () => {
    const {items} = useCart()
    let len = items.reduce((a, b) => a + b.quantity, 0)
    if (len > 99) len = 99
    const [, show] = useCartBtn()
    return <button className={t.cartBtn} onClick={() => show(true)} role={'button'} name={'shoppingCartBtn'}>
        {len ? <span>{len}</span> : null}
        <i className={'i-carbon:shopping-cart'}></i>
    </button>
}