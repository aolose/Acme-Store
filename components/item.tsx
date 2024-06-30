import {Cube, Surface} from "@cpm/cube";
import t from '@css/app.module.scss'
import clsx from "clsx";
import {Item} from "@types";
import {useCart, useCurrency} from "@store";
import {fmt} from "../utils";
import {useEffect, useState} from "react";

const {item, gift, bg0, bg1, bg2, bg3, bg4} = t

const selectTheme = (id: string) => {
    let i = 0
    let l = id.length
    while (l--) {
        i += id.charCodeAt(l)
    }
    return clsx(gift, [bg0, bg1, bg2, bg3, bg4][i % 5]);
}

const PlusOne = ({id = 1}) => {
    // you can get colors from https://coolors.co/palettes/trending
    const colors = [
        '#006d77', '#83c5be', '#edf6f9', '#ffddd2', '#e29578'
    ]
    useEffect(() => {
        const t = setTimeout(() => {
            ss(1)
        }, 30)
        return () => clearTimeout(t)
    }, [])

    const style = {color: colors[id % 5]};
    const [s, ss] = useState(0)
    return <span className={clsx(s && 'act', t.plus)} style={style}>+1</span>
}

export const Product = ({data, state}: {
    state: 'in' | 'out'
    data: Item
}) => {
    const [plusOnes, setPlus] = useState([] as number[])
    const [currency] = useCurrency()
    const t = selectTheme(data.id)
    const {addToCard} = useCart()
    const click = () => {
        const t = Date.now()
        setPlus(plusOnes.concat(t))
        addToCard(data)
    }

    useEffect(() => {
        const t = setTimeout(() => {
            const n = Date.now() - 1e3
            const i = plusOnes.findIndex(a => a > n)
            if (i > 0) {
                setPlus(plusOnes.slice(0, i))
            }
        }, 1e3)
        return () => clearTimeout(t)
    }, [plusOnes])

    return <div className={clsx(item, state)} onClick={click}>
        {plusOnes.map((c) => <PlusOne id={c} key={c}/>)}
        <p className={'color-light text-sm-0'}>{data.title}</p>
        <div className={'flex-1 relative bg-amber justify-center items-center'}>
            <Cube
                sizeX={30}
                sizeZ={30}
                sizeY={60}
                topX={0}
                topZ={0}
                hide={[Surface.TOP]}
                left={t}
                right={t}
                front={t}
                back={t}
                bottom={t}
            />
        </div>
        <p className={'color-amber text-sm-1'}>
            <span>{currency.symbol}</span>
            <span>{fmt(data.price * currency.usdCoef, currency)}</span>
        </p>
    </div>
}