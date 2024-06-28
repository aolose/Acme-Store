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
                         backClass,
                         bottomClass,
                         frontClass,
                         leftClass,
                         rightClass,
                         topClass,
                         widthX = 150,
                         widthY = 150,
                         widthZ = 150,
                         tWidthX,
                         tWidthZ,
                         hideSurfaces = [0, 0, 0, 0, 0, 0]
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

    if (tWidthZ !== undefined) {
        isPyramid = true;
        [lrw, fbh, fba] = getAngle(tWidthZ, widthZ, widthY)

    }
    if (tWidthX !== undefined) {
        isPyramid = true;
        [fbw, lrh, lra] = getAngle(tWidthX, widthX, widthY)
    }

    const style = {
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--z': `${z}px`,
        '--rx': `${Math.floor(rx)}deg`,
        '--ry': `${Math.floor(ry)}deg`,
        '--twx': `${tWidthX ?? widthX}px`,
        '--twz': `${tWidthZ ?? widthZ}px`,
        '--wx': `${widthX}px`,
        '--wy': `${widthY}px`,
        '--wz': `${widthZ}px`,
        '--lrh': `${lrh || widthY}px`,
        '--fbh': `${fbh || widthY}px`,
        '--fbw': `${fbw}px`,
        '--lrw': `${lrw}px`,
        '--fba': `${fba}deg`,
        '--lra': `${lra}deg`,
    } as CSSProperties;


    return <div className={c.baseCubeXYZ} style={style}>
        <div className={clsx(c.baseCubeRotate, isPyramid && c.basePyramid)}>
            {!hideSurfaces[1] && <div className={clsx(c.baseWallBottom, bottomClass)}/>}
            {!hideSurfaces[5] && <div className={c.baseWallBack}>
                <div className={backClass}/>
            </div>}
            {!hideSurfaces[3] && <div className={c.baseWallRight}>
                <div className={rightClass}/>
            </div>}
            {!hideSurfaces[2] && <div className={c.baseWallLeft}>
                <div className={leftClass}/>
            </div>}
            {!hideSurfaces[0] && <div className={clsx(c.baseWallTop, topClass)}/>}
            {!hideSurfaces[4] && <div className={c.baseWallFront}>
                <div className={frontClass}/>
            </div>}
        </div>
    </div>
}