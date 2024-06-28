interface Props {
    children?: React.ReactNode;
    childrenElement?: React.JSX.Element;
    style?: React.CSSProperties;
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

interface PageProps {
    params: {
        page: number
    }
}

interface CubeProps extends Props {
    // position at x-axis
    x?: number,
    // position at y-axis
    y?: number,
    // position at z-axis
    z?: number,
    // rotateY angle
    ry?: number,
    // rotateX angle
    rx?: number,
    // front surface class name
    frontClass?: string,
    // back surface class name
    backClass?: string,
    // left surface class name
    leftClass?: string,
    // right surface class name
    rightClass?: string,
    // top surface class name
    topClass?: string,
    // bottom surface class name
    bottomClass?: string,
    // the x-axis width of cube
    widthX?: number,
    // the y-axis width of cube
    widthY?: number,
    // the z-axis width of cube
    widthZ?: number,
    // top surface x-axis width, default same as widthX
    tWidthX?: number,
    // top surface z-axis width, default same as widthZ
    tWidthZ?: number,
    // Specifies the face of the cube to hide
    // default [0,0,0,0,0,0]
    // The six fields means: [top,bottom,left,right,front,back]
    hideSurfaces?: (undefined|number)[]
}
