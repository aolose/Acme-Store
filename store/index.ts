import {atom, useAtom, useAtomValue} from 'jotai'
import {Currency, CurrencyKey, Item} from "@types";
import {useEffect} from "react";

const cartKey = 'cart'

const localCache = () => {
    if (globalThis?.localStorage) {
        try {
            const c = localStorage.getItem(cartKey)
            if (c) return JSON.parse(c) as CartItem[];
        } catch (e) {
        }
    }
    return [] as CartItem[]
}
// total page
const total = atom(1)
export const useTotal = () => useAtom(total)

// items of shopping cart
const cardItems = atom<CartItem[]>([])
const currency = atom<CurrencyKey>('usd' as CurrencyKey)
const currencyList = atom<Currency[]>([])

// display shopping cart
const showCart = atom<Boolean>(false)

// show product preview
const showDetail = atom<boolean>(false)
// preview product
const previewProduct = atom<Item>({} as Item)

export const usePreview = () => {
    const [show, seShow] = useAtom(showDetail)
    const [product, setProduct] = useAtom(previewProduct)

    return {
        item: product,
        showed: show,
        hide: (item: Item) => {
            if (item.id === product.id)
                seShow(false)
        },
        show: (item: Item) => {
            setProduct(item)
            seShow(true)
        }
    }
}

export const useCartBtn = () => useAtom(showCart)

export const useCurrencyList = () => useAtom(currencyList)

export const useCurrency = () => {
    const list = useAtomValue(currencyList)
    const [k, sk] = useAtom(currency)
    return [
        list.find(a => a.key === k) || {
            key: 'usd',
            symbol: '$',
            usdCoef: 1
        } as Currency,
        sk
    ] as [Currency, typeof sk]
}

export const useCart = () => {
    const [items, setItems_] = useAtom(cardItems)
    useEffect(() => {
        setItems_(localCache())
    }, [])
    const setItems = (items: CartItem[]) => {
        localStorage.setItem(cartKey, JSON.stringify(items))
        setItems_(items)
    }
    const [currency] = useCurrency()
    const findIndex = (id: ProductId) => items.findIndex(a => a.item.id === id)
    const addToCard = (item: Item, quantity = 1) => {
        const exist = findIndex(item.id)
        if (-1 === exist) setItems([{quantity: quantity, item: item}].concat(items))
        else {
            items[exist].quantity += quantity
            setItems(items.slice())
        }
    }
    const removeFromCard = (item: Item, quantity = 1) => {
        const exist = findIndex(item.id)
        const q = items[exist].quantity -= quantity
        if (!q) setItems(items.slice(0, exist).concat(items.slice(exist + 1)))
        else setItems(items.slice())
    }

    const cleanItem = (item: Item) => {
        setItems(items.filter(a => a.item.id !== item.id))
    }

    const cleanCart = () => {
        setItems([])
    }

    const total = items.reduce((a, b) => a + b.item.price * b.quantity, 0)
    return {currency, items, total, addToCard, removeFromCard, cleanItem, cleanCart}
}
