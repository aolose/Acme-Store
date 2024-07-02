interface Props {
  children?: React.ReactNode;
  childrenElement?: React.JSX.Element;
  style?: React.CSSProperties;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

interface PageProps {
  params: {
    page: number;
  };
}

interface CubeProps extends Props {
  className?: string;
  // position at x-axis
  x?: number;
  // position at y-axis
  y?: number;
  // position at z-axis
  z?: number;
  // rotateY angle
  ry?: number;
  // rotateX angle
  rx?: number;
  // front surface class name
  front?: string;
  // back surface class name
  back?: string;
  // left surface class name
  left?: string;
  // right surface class name
  right?: string;
  // top surface class name
  top?: string;
  // bottom surface class name
  bottom?: string;
  // the x-axis width of cube
  sizeX?: number;
  // the y-axis width of cube
  sizeY?: number;
  // the z-axis width of cube
  sizeZ?: number;
  // top surface x-axis width, default same as widthX
  topX?: number;
  // top surface z-axis width, default same as widthZ
  topZ?: number;
  // Specifies the face of the cube to hide
  // default [0,0,0,0,0,0]
  // The six fields means: [top,bottom,left,right,front,back]
  hide?: Surface[];
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  topElement?: React.ReactNode;
  bottomElement?: React.ReactNode;
  frontElement?: React.ReactNode;
  backElement?: React.ReactNode;
}

type ProductId = Item["id"];
type CartItem = {
  quantity: number;
  item: Item;
};
