import type {NextPage} from "next";
import {useRouter} from "next/router";
import {Scene} from "@cpm/scene";
import {House} from "@cpm/house";

const ProductList: NextPage = () => {
    const router = useRouter()
    const p = router.query.page
    return <Scene>
        <House/>
    </Scene>;
};

export default ProductList;
