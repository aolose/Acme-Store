import {useRouter} from "next/router";
import clsx from "clsx";
import {ReactNode} from "react";
import Link from "next/link";
import t from '@css/app.module.scss'
import {useTotal,useSearch} from "@store";

export const PageButtons = () => {
    const search = useSearch()
    const cur = +(useRouter().query.page || 1)
    const [total] = useTotal()
    const getBtn = ()=>{
        let i = 2
        const ps = [cur - 2, cur - 1, cur, cur + 1, cur + 2]
        ps.forEach(a => {
            if (a < 1) i++
            else if (a > total) i--
        })

        const set = new Set<number>([1, ps[i - 1], ps[i], ps[i + 1], total])
        const p = Array.from(set)
            .filter(a => a > 0 && a <= total)
            .sort((a, b) => a - b)

        const buttons: ReactNode[] = []
        let pre = -1
        p.forEach(a => {
            if (pre == -1 || pre === a - 1) {
                pre = a
            } else if (pre !== -1) {
                pre = -1
                buttons.push(<span key={a+'_'}>...</span>)
            }
            buttons.push(<Link
                key={a}
                role={'link'}
                href={`/${a}${search ? `?s=${search}` : ''}`}
                className={
                    clsx(
                        (cur === a) && 'cur',
                    )
                }>{a}</Link>)
        })
        return buttons
    }
    return <div className={t.pageButtons}>
        {getBtn()}
    </div>
}
