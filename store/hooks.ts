import type {Item} from "@types";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {loadItems} from "../utils/loadData";
import {useSearchParams} from "next/navigation";

export const useSearch = (key: string='s') => {
    const searchParams = useSearchParams()
    return searchParams.get(key) || new URL(globalThis?.location?.href || '', 'http://a').searchParams.get(key) || ''
}

export const usePageData = () => {
    const router = useRouter()
    const search = useSearch('s')
    const [products, setProducts] = useState([] as Item[])
    const p = +(router.query.page || 1)

    useEffect(() => {
        const {result, cancel} = loadItems(p, search)
        result.then(a => {

        })
        return cancel
    }, [p, search])

}