import clsx from "clsx";
import css from "@css/app.module.scss"
import {useEffect, useState} from "react";
import {Ground} from "@cpm/ground";
import {House} from "@cpm/house";
import {usePageData} from "../store/hooks";
import {Item} from "@types";
import {Product} from "@cpm/item";

export const Scene = ({children}: Props) => {
    useEffect(() => {
        // Let the house  change angle as the mouse moves
        const mouseMoveListener = (e: MouseEvent) => {
            const y = e.pageX / window.innerWidth - 0.5;
            const x = e.pageY / window.innerHeight - 0.5;
            const s = document.body.style
            s.setProperty('--rotate-x', `${y * 20}deg`)
            s.setProperty('--rotate-z', `${x * 3}deg`)
        }
        window.addEventListener("pointermove", mouseMoveListener);
        return () => {
            window.removeEventListener("pointermove", mouseMoveListener);
        }
    })
    const style = {
        transform: 'rotateY(var(--rotate-x,0)) rotateX(var(--rotate-z,0))'
    }

    const [items, setItems] = useState([] as Item[])
    const addItems = (goods: Item[]) => {

        setItems(goods)
    }
    const loading = usePageData(addItems)

    return <div className={clsx(css.scene, 'w-screen h-screen')}>
        <Ground/>
        <div className={'absolute flex items-center justify-center w-full h-full top-0'} style={style}>
            <House loading={loading}>
                <div className={css.list}>
                    {items.map((item, index) =>
                        <Product key={item.id} data={item}/>)}
                </div>
            </House>
        </div>
    </div>
}