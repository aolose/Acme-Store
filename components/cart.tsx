import {useCart} from "@store";
import t from '@css/app.module.scss'

export const Cart = () => {
    const [items,
        total,
        addToCard,
        removeFromCard
    ] = useCart()

    return <div className={`fixed flex flex-col rounded-lg ${t.cart}`}>
        <div>

        </div>
        <div className={'flex-1'}>
            <div>
                <span>{}</span>
            </div>
        </div>
        <button className={'bg-light my-8 mx-a w-4/5 px-2 py-2 rounded-full cursor-pointer opacity-80 hover:opacity-100'}>
            Checkout
        </button>
    </div>
}