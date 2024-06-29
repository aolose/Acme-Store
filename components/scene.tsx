import clsx from "clsx";
import css from "@css/3d.module.scss"
import {useEffect} from "react";
import {Ground} from "@cpm/ground";
import {House} from "@cpm/house";

export const Scene = ({children}: Props) => {
    useEffect(() => {
        const mouseMoveListener = (e: MouseEvent) => {
            const y = e.pageX / window.innerWidth - 0.5;
            const x = e.pageY / window.innerHeight - 0.5;
            const s = document.body.style
            s.setProperty('--rotate-x', `${y * 30 }deg`)
            s.setProperty('--rotate-z', `${x * 3 }deg`)
        }
        window.addEventListener("pointermove", mouseMoveListener);
        return () => {
            window.removeEventListener("pointermove", mouseMoveListener);
        }
    })
    const style = {
        transform: 'rotateY(var(--rotate-x,0)) rotateX(var(--rotate-z,0))'
    }
    return <div className={clsx(css.scene, 'w-screen h-screen')}  >
        <Ground/>
        <div className={'absolute flex items-center justify-center w-full h-full top-0'} style={style}>
            <House/>
        </div>
    </div>
}