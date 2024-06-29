import type {NextPage} from "next";
import {useRouter} from "next/router";
import {Scene} from "@cpm/scene";

const ProductList: NextPage = () => {
    const router = useRouter()
    const p = router.query.page
    return <Scene/>
};

export default ProductList;
