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
  hide?: Surface[];
  // add element to left surface
  leftElement?: React.ReactNode;
  // add element to right surface
  rightElement?: React.ReactNode;
  // add element to top surface
  topElement?: React.ReactNode;
  // add element to bottom surface
  bottomElement?: React.ReactNode;
  // add element to front surface
  frontElement?: React.ReactNode;
  // add element to back surface
  backElement?: React.ReactNode;
}

type ProductId = Item["id"];
type CartItem = {
  quantity: number;
  item: Item;
};
type USDCoefMap = { [key in CurrencyKey]?: number };
