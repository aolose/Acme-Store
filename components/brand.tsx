import {Dancing_Script} from 'next/font/google'
import clsx from "clsx";
import css from "@css/cpm.module.scss"

const dancingScript = Dancing_Script({subsets: ['latin']});

export const Brand = () => <div
    className={clsx(
        css.brand,
        dancingScript.className,
        'flex items-center justify-center rounded-lg',
        'fw-700 text-lg my-1 mx-a'
        )}>
    ACME STORE
</div>
