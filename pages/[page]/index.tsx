import {Scene} from "@cpm/scene";
import {Board} from "@cpm/board";
import {Search} from "@cpm/search";
import {Cart} from "@cpm/cart";

const ProductList = () => {
    return <div className={'w-full '}>
        <Scene/>
        <Board/>
        <Search/>
        <Cart/>
    </div>
};

export default ProductList;
