import type {Item} from "@types";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {loadItems} from "../utils/loadData";
import {useSearchParams} from "next/navigation";
import {useTotal} from "./index";

export const useSearch = (key: string = 's') => {
    const searchParams = useSearchParams()
    return searchParams.get(key) || new URL(globalThis?.location?.href || '', 'http://a').searchParams.get(key) || ''
}

export const usePageData = (cb: (items: Item[]) => void) => {
    const router = useRouter()
    const [total, setTotal] = useTotal()
    const search = useSearch('s')
    const [products, setProducts] = useState([] as Item[])
    const p = +(router.query.page || 1)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const {result, cancel} = loadItems(p, search)
        result.then(a => {
            setTotal(a.total)
            cb(a.items)
            setLoading(false)
        })
        return cancel
    }, [p, search])
    return loading
}