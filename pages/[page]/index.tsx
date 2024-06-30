import {Scene} from "@cpm/scene";
import {Preview} from "@cpm/preview";
import {Search} from "@cpm/search";
import {Cart} from "@cpm/cart";
import {CurrencyBtn} from "@cpm/currency";
import {PageButtons} from "@cpm/pag";
import {CartBtn} from "@cpm/cartBtn";

const ProductList = () => {
    return <div className={'w-full '}>
        <Scene/>
        <Preview/>
        <Search/>
        <Cart/>
        <CurrencyBtn/>
        <PageButtons/>
        <CartBtn/>
    </div>
};

export default ProductList;
