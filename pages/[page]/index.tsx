import {Scene} from "@cpm/scene";
import {Board} from "@cpm/board";
import {Search} from "@cpm/search";
import {Cart} from "@cpm/cart";
import {CurrencyBtn} from "@cpm/currency";
import {PageButtons} from "@cpm/pag";

const ProductList = () => {
    return <div className={'w-full '}>
        <Scene/>
        <Board/>
        <Search/>
        <Cart/>
        <CurrencyBtn/>
        <PageButtons/>
    </div>
};

export default ProductList;
