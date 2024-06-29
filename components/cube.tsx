import c from '@css/3d.module.scss'
import clsx from "clsx";
import type {CSSProperties} from "react";

/**
 * It's used to create a 3D cube and can also generate cones.
 *
 * @param x position X coordinate
 * @param y position Y coordinate
 * @param z position Z coordinate
 * @param rx x-axis rotation angle
 * @param ry y-axis rotation angle
 * @param backClass classname for back side
 * @param bottomClass classname for bottom side
 * @param frontClass classname for front side
 * @param leftClass classname for left side
 * @param rightClass classname for right side
 * @param topClass classname for top side
 * @param widthX x-axis width
 * @param widthY y-axis width
 * @param widthZ z-axis width
 * @param tWidthX top side x width
 * @param tWidthZ top side z width
 * @param hideSurfaces hide some surfaces
 *
 * @constructor
 */
export const Cube = ({
                         x = 0,
                         y = 0,
                         z = 0,
                         rx = 0,
                         ry = 0,
                         back,
                         bottom,
                         front,
                         left,
                         right,
                         top,
                         sizeX = 150,
                         sizeY = 150,
                         sizeZ = 150,
                         topX,
                         topZ,
                         hide = []
                     }: CubeProps) => {
    let fbw = 0,
        lra = 0,
        lrw = 0,
        fba = 0,
        fbh = 0,
        lrh = 0

    let isPyramid = false
    const getAngle = (topWidth: number, width: number, height: number) => {
        const d = (width - topWidth) / 2;
        const h = Math.sqrt(d * d + height * height)
        return [d, h, Math.atan(d / height) * 180 / Math.PI]
    }

    if (topZ !== undefined) {
        isPyramid = true;
        [lrw, fbh, fba] = getAngle(topZ, sizeZ, sizeY)

    }
    if (topX !== undefined) {
        isPyramid = true;
        [fbw, lrh, lra] = getAngle(topX, sizeX, sizeY)
    }

    const style = {
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--z': `${z}px`,
        '--rx': `${Math.floor(rx)}deg`,
        '--ry': `${Math.floor(ry)}deg`,
        '--twx': `${topX ?? sizeX}px`,
        '--twz': `${topZ ?? sizeZ}px`,
        '--wx': `${sizeX}px`,
        '--wy': `${sizeY}px`,
        '--wz': `${sizeZ}px`,
        '--lrh': `${lrh || sizeY}px`,
        '--fbh': `${fbh || sizeY}px`,
        '--fbw': `${fbw}px`,
        '--lrw': `${lrw}px`,
        '--fba': `${fba}deg`,
        '--lra': `${lra}deg`,
    } as CSSProperties;

    const show = (surface: Surface) => !hide.includes(surface)

    return <div className={c.baseCubeXYZ} style={style}>
        <div className={clsx(c.baseCubeRotate, isPyramid && c.basePyramid)}>
            {show(Surface.BOTTOM) && <div className={clsx(c.baseWallBottom, bottom)}/>}
            {show(Surface.BACK) && <div className={c.baseWallBack}>
                <div className={clsx(c.baseWallBack, back)}/>
            </div>}
            {show(Surface.RIGHT) && <div className={c.baseWallRight}>
                <div className={clsx(c.innerRight, right)}/>
            </div>}
            {show(Surface.LEFT) && <div className={c.baseWallLeft}>
                <div className={clsx(c.innerLeft,left)}/>
            </div>}
            {show(Surface.TOP) && <div className={clsx(c.baseWallTop, top)}/>}
            {show(Surface.FRONT) && <div className={c.baseWallFront}>
                <div className={clsx(c.innerFront,front)}></div>
            </div>}
        </div>
    </div>
}

export enum Surface {
    FRONT,
    BACK,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}