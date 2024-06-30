import {useCart, useCartBtn} from "@store";
import t from '@css/app.module.scss'
import Image from "next/image";
import {fmt} from "../utils";
import clsx from "clsx";
import {Orbitron} from 'next/font/google'

const orbitron = Orbitron({subsets: ['latin']})
const data: CartItem[] = [
    {
        quantity: 100, item: {
            "id": "986a7c4e-7810-4318-bed4-281f23abf3fc",
            "title": "Intelligent Cotton Bike",
            "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
            "imageSrc": "http://loremflickr.com/640/480/technics",
            "price": 54087.89,
            "priceCurrency": "jpy",
            "createdAt": "2023-12-05T07:38:04.019Z",
            "updatedAt": "1925-03-29T16:27:34.541Z"
        }
    },
    {
        quantity: 10, item: {
            "id": "986c4e-7810-4318-bed4-281f23abf3fc",
            "title": "Intelligent Cotton Bike",
            "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
            "imageSrc": "http://loremflickr.com/640/480/technics",
            "price": 54087.89,
            "priceCurrency": "jpy",
            "createdAt": "2023-12-05T07:38:04.019Z",
            "updatedAt": "1925-03-29T16:27:34.541Z"
        }
    },
]

export const Cart = () => {
    const {
        currency, items,
        total,
        addToCard,
        removeFromCard,
        cleanItem
    } = useCart()

    const [act, show] = useCartBtn()

    return <>
        <div className={clsx(
            'fixed flex flex-col rounded-lg',
            t.cart,
            act && 'act'
        )}>
            <div className={'color-light p-2 px-8 mt-2'}>
                SHOPPING CART
                <button
                    onClick={() => show(false)}
                    className={'clo i-carbon:close-large'}></button>
            </div>
            <div className={'flex-1 overflow-auto rounded-lg'}>
                {
                    items.map(({quantity, item}) =>
                        <div key={item.id} className={'cart-item flex m-3 p-2 flex-wrap ' +
                            'rounded-sm overflow-hidden'}>
                            <div className={'w-16 flex-shrink-0 h-16 rounded-md mr-3 ' +
                                'overflow-hidden relative bg-amber'}>
                                <Image src={item.imageSrc} alt={item.title} fill={true}/>
                            </div>
                            <div className={'flex-1 w-0'}>
                                <span className={'cur'}>{fmt(item.price, currency)}</span>
                                <span className={'name'}>{item.title}</span>
                                <p className={'w-full text-sm ' +
                                    'color-neutral text-ellipsis ' +
                                    'overflow-hidden line-clamp-2'}>
                                    {item.description}</p>
                            </div>
                            <div className={'tools w-full flex text-sm flex items-center'}>
                                <div className={'opt flex flex-1'}>
                                    <span className={'scale-80'}>Quantity:</span>
                                    <button onClick={() => removeFromCard(item)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => addToCard(item)}>+</button>
                                </div>
                                <button
                                    onClick={()=>cleanItem(item)}
                                    className={'i-carbon:trash-can text-lg'}></button>
                            </div>
                        </div>)
                }
            </div>
            <div className={'total ' + orbitron.className}>
                <span>Total</span>
                <span className={'t-cur'}>
                    {fmt(total, currency)}
                </span>
            </div>
            <button
                className={'check'}>
                <i className={' i-carbon:shopping-cart'}></i>
                <span>Checkout</span>
            </button>
        </div>
        <div className={'msk'}/>
    </>
}