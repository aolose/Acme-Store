import clsx from "clsx";
import css from "@css/3d.module.scss"
import {Cube} from "@cpm/cube";

export const Scene = ({children}: Props) => {
    return <div className={clsx(css.scene,'w-screen h-screen flex items-center justify-center')}>
            {children}
    </div>
}