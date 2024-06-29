import {Cube, Surface} from "@cpm/cube";
import t from '@css/3d.module.scss'
import clsx from "clsx";

const {item, gift, bg0, bg1, bg2, bg3, bg4} = t

const selectTheme = (i: number) => {
    return clsx(gift, [bg0, bg1, bg2, bg3, bg4][i]);
}

export const Item = ({theme = 2}) => {
    const t = selectTheme(theme)
    return <div className={item}>
        <p className={'color-light text-sm-0'}>ASDSAD saSDASD</p>
        <div className={'flex-1'}>
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
            <span>$</span>
            <span>324,343</span>
        </p>
    </div>
}