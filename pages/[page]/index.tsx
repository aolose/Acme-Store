import {Scene} from "@cpm/scene";
import {Board} from "@cpm/board";
import {Search} from "@cpm/search";
import {Cart} from "@cpm/cart";

const ProductList = ({searchParams = {s: ''}}) => {
    return <div className={'w-full '}>
        <Scene/>
        <Board/>
        <Search search={searchParams.s}/>
        <Cart/>
    </div>
};

export default ProductList;
