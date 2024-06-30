import {useState} from "react";
import {useRouter} from "next/router";
import t from '@css/app.module.scss'
import {useSearch} from "../store/hooks";

export const Search = () => {
    const s = useSearch('s')
    const [search, setSearch] = useState(s)
    const router = useRouter()
    const exec = () => {
        router.push(search ? `/1?s=${search}` : '/')
    }

    return <div
        className={t.search + ' flex top-0 left-0 rounded-full m-xy w-[300px] h-[46px] max-w-[90%] fixed z-3 bg-gray-800'}>
        <input
            role={'search'}
            className={'flex-1 px-8 rounded-full w-0'}
            type='text' placeholder='Search'
            value={search}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    e.stopPropagation()
                    e.preventDefault()
                    exec()
                }
            }}
            onChange={(e) => {
                const v = e.target.value
                setSearch(v.trim())
            }}/>
        <button onClick={exec} className={'color-neutral px-4'}>
            Search
        </button>
    </div>
}