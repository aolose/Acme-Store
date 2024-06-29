import {Cube, Surface} from "@cpm/cube";
import c from '@css/3d.module.scss'
import clsx from "clsx";
import {Item} from "@cpm/item";

export const House = ({
                          wx = 640, wy = 400,
                          wz = 500,
                          ry = 30,
                          rx = 0
                      }) => {
    const {
        wood, cloth, decorate,
        shadow, decorateShadow, rocket,
        windowClip,innerWall
    } = c
    const wallGap = 40
    const wallDeep = 200
    const expand = 80
    const movY = (y1: number, y2: number) => y1 - (y1 - y2) / 2
    const css = {
        width: `${wx}px`,
        height: `${wy}px`,
        transform:`rotateX(${rx}deg) rotateY(${ry}deg)`,
        '--sh': `${wy}px`,
        '--sw': `${wx}px`,
        '--dh': `${expand}px`,
        '--wa': `${wallGap}px`,
        '--deep':`${-wallDeep/2}px`
    }
    return <div className={c.house} style={css}>
        <div className={shadow}/>
        {/* Ground */}
        <Cube
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
            front={clsx(wood, windowClip)}
            right={wood}
            left={wood}
            back={wood}
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
            z={(wz-wallDeep) / 2}
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
            <Item/>
        </Cube>
    </div>
}