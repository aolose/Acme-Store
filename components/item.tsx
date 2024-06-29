import {Cube, Surface} from "@cpm/cube";
import t from '@css/app.module.scss'
import clsx from "clsx";
import {Item} from "@types";
import {useCurrency} from "@store";
import {fmt} from "../utils";

const {item, gift, bg0, bg1, bg2, bg3, bg4} = t

const selectTheme = (id: string) => {
    let i = 0
    let l = id.length
    while (l--) {
        i += id.charCodeAt(l)
    }
    return clsx(gift, [bg0, bg1, bg2, bg3, bg4][i % 5]);
}
export const Product = ({data}: {
    data: Item
}) => {
    const [currency] = useCurrency()
    const t = selectTheme(data.id)
    return <div className={item}>
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
            <span>{fmt(data.price * currency.usdCoef,currency)}</span>
        </p>
    </div>
}