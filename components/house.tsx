import {Cube, Surface} from "@cpm/cube";
import c from '@css/house.module.scss'

export const House = ({wx = 640, wy = 400, wz = 500, rx = 30}) => {
    const {wood, cloth, decorate} = c
    const expand = 80
    const movY = (y1: number, y2: number) => y1 - (y1 - y2) / 2
    const css = {
        width: `${wx}px`,
        height: `${wy}px`,
        '--dh': `${expand}px`
    }
    return <div className={c.house} style={css}>
        {/*body*/}
        <Cube
            sizeX={wx}
            sizeY={wy}
            sizeZ={wz}
            front={wood}
            right={wood}
            left={wood}
            back={wood}
        />
        {/*roof decorate*/}
        <Cube sizeX={wx + expand}
              sizeY={expand}
              sizeZ={wz + expand}
              y={-movY(wy, expand) + expand}
              front={decorate}
              left={decorate}
              back={decorate}
              right={decorate}
              hide={[
                  Surface.BOTTOM
              ]}
        />
        {/*roof*/}
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
    </div>
}