import {atom, useAtom} from 'jotai'
import {Item} from "@types";

type ProductId = Item['id'];
type CartItem = {
    quantity: number,
    item: Item
}

const cardItems = atom<CartItem[]>([])

export const useCart = () => {
    const [items, setItems] = useAtom(cardItems)
    const findIndex = (id: ProductId) => items.findIndex(a => a.item.id === id)
    const addToCard = (item: Item, quantity = 1) => {
        const exist = findIndex(item.id)
        if (-1 === exist) setItems([{quantity: quantity, item: item}].concat(items))
        else {
            items[exist].quantity += quantity
            setItems(items.slice())
        }
    }
    const removeFromCard = (id: ProductId, quantity = 1) => {
        const exist = findIndex(id)
        const q = items[exist].quantity -= quantity
        if (!q) setItems(items.slice(0, exist).concat(items.slice(exist + 1)))
        else setItems(items.slice())
    }

    const total = items.reduce((a, b) => a + b.item.price * b.quantity, 0)
    return [items, total, addToCard, removeFromCard]
}
