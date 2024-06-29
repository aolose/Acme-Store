import {Currency} from "@types";

// format number to currency
export const fmt = (n:number,c:Currency)=>{
    return new Intl.NumberFormat('en', { style: 'currency', currency: c.key }).format(
        n,
    );
}