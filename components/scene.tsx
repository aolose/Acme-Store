import clsx from "clsx";
import css from "@css/3d.module.scss"
import {Cube} from "@cpm/cube";

export const Scene = ({children}: Props) => {
    return <div className={clsx(css.scene,'w-screen h-screen flex items-center justify-center')}>
        <div className={clsx(css.shadow1)} />
        <Cube ry={50} rx={-40} widthX={300} widthZ={300} tWidthX={50} tWidthZ={50}/>
        {children}
    </div>
}