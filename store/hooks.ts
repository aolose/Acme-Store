import type {Item} from "@types";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useCurrencyList} from "./index";
import {loadCurrencyList, loadItems} from "../utils/loadData";
import {useSearchParams} from "next/navigation";

export const usePageData = () => {
    const router = useRouter()
    const params = useSearchParams()
    const search = params.get("search") || '';
    const [currencyList, setList] = useCurrencyList()
    const [products, setProducts] = useState([] as Item[])
    const p = +(router.query.page || 1)

    useEffect(() => {
        if (!currencyList.length) {
            loadCurrencyList().then(setList)
        }
        const {result, cancel} = loadItems(p, search)
        result.then(a => {

        })
        return cancel
    }, [p, search])

}