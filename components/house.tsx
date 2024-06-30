import {Cube, Surface} from "@cpm/cube";
import c from '@css/app.module.scss'
import clsx from "clsx";
import Image from "next/image";
import {ReactNode} from "react";

export const House = ({
                          children = [] as ReactNode[]|ReactNode,
                          wx = 640, wy = 400,
                          wz = 500,
                          ry = 10,
                          rx = 0
                      }) => {
    const {
        wood, cloth, decorate,
        shadow, decorateShadow, rocket,
        windowClip, innerWall,glass,glassFront,
        brand,brandShadow
    } = c
    const wallGap = 40
    const wallDeep = 200
    const expand = 80
    const movY = (y1: number, y2: number) => y1 - (y1 - y2) / 2
    const css = {
        width: `${wx}px`,
        height: `${wy}px`,
        transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
        '--sh': `${wy}px`,
        '--sw': `${wx}px`,
        '--dh': `${expand}px`,
        '--wa': `${wallGap}px`,
        '--deep': `${-wallDeep / 4}px`
    }
    return <div className={c.house} style={css}>
        <div className={shadow}/>
        {/* Ground */}
        <Cube
            className={'pointer-events-none'}
            sizeX={wx + 180}
            sizeY={10}
            sizeZ={wz + 180}
            front={rocket}
            right={rocket}
            left={rocket}
            back={rocket}
            top={rocket}
            y={movY(wy, 10)}
            hide={[
                Surface.BOTTOM
            ]}
        />
        {/* Walls */}
        <Cube
            sizeX={wx}
            sizeY={wy}
            sizeZ={wz}
            front={clsx(wood, windowClip, 'pointer-events-none')}
            right={wood}
            left={wood}
            back={wood}
            leftElement={<Image
                className={'grayscale-70 brightness-40'}
                src={'/gl.jpeg'} width={wz * 0.5} height={0} alt={'ad'}/>}
            hide={[
                Surface.BOTTOM
            ]}
        />
        {/* Roof decorates shadow */}
        <Cube sizeX={wx}
              sizeY={expand}
              sizeZ={wz}
              y={-movY(wy, expand) + expand + 20}
              front={decorateShadow}
              left={decorateShadow}
              back={decorateShadow}
              right={decorateShadow}
              className={'pointer-events-none'}
              hide={[
                  Surface.BOTTOM,
                  Surface.TOP,
              ]}
        />
        {/* Roof decorate */}
        <Cube sizeX={wx + expand}
              sizeY={expand}
              sizeZ={wz + expand}
              y={-movY(wy, expand) + expand}
              front={decorate}
              left={decorate}
              back={decorate}
              right={decorate}
              hide={[
                  Surface.BOTTOM,
                  Surface.TOP,
              ]}
        />
        {/* brand's shadow */}
        <Cube
            sizeX={300}
            sizeY={120}
            sizeZ={0}
            y={movY(-wy,-140)}
            z={164}
            rx={63}
            back={brandShadow}
            hide={[
                Surface.BOTTOM,
                Surface.TOP,
                Surface.LEFT,
                Surface.RIGHT,
                Surface.FRONT
            ]}
        />
        {/* brand */}
        <Cube
            frontElement={<span>ACME STORE</span>}
            front={brand}
            left={brand}
            top={brand}
            right={brand}
            bottom={brand}
            back={brand}
            sizeX={300}
            sizeY={80}
            sizeZ={15}
            y={movY(-wy,-160)}
            z={220}
        />
        {/* Roof */}
        <Cube sizeX={wx + expand}
              sizeZ={wz + expand}
              sizeY={wy / 3}
              topZ={0}
              topX={wx * .8}
              front={cloth}
              left={cloth}
              back={cloth}
              right={cloth}
              y={-movY(wy, wy / 3)}
              hide={[
                  Surface.BOTTOM
              ]}
        />
        {/*Inner Walls*/}
        <Cube
            z={(wz - wallDeep) / 2}
            sizeX={wx - wallGap * 2}
            sizeY={wy - wallGap * 2}
            sizeZ={wallDeep}
            right={innerWall}
            left={innerWall}
            bottom={innerWall}
            back={innerWall}
            hide={[
                Surface.FRONT
            ]}
        >
            {children}
        </Cube>
        {/* class window */}
        <Cube
            className={'pointer-events-none'}
            z={wz / 2 - 5}
            sizeX={wx - wallGap * 2}
            sizeY={wy - wallGap * 2}
            sizeZ={10}
            right={glass}
            left={glass}
            bottom={glass}
            front={glassFront}
            hide={[
                Surface.TOP,
                Surface.BACK
            ]}
        />
    </div>
}