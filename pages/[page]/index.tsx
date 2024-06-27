import type {NextPage} from "next";
import {useRouter} from "next/router";
import {Brand} from "@cpm/brand";
import css from '@css/cpm.module.scss'
import clsx from "clsx";
import DisplayBox from "@cpm/displayBox";
import Image from "next/image";

const ProductList: NextPage = () => {
    const router = useRouter()
    const p = router.query.page
    return (
        <div className={clsx('w-screen  h-screen flex flex-col overflow-hidden relative', css.scene, css.aniHu)}>
            <div className={clsx(css.shadowLeft, 'absolute')}/>
            <div className={clsx(css.shadowBottom, 'absolute')}/>
            <div className={clsx(css.machineBg, 'flex flex-col flex-1 rounded-3xl')}>
                <div className={'flex flex-1 p-2'}>
                    <div className={'flex flex-col flex-1'}>
                        <div className={'p-1 pb-0'}>
                            <Brand/>
                        </div>
                        <div className={'flex-1 py-3 px-5'}>
                            <DisplayBox/>
                        </div>
                    </div>
                    <div className={'w-[300px]'}>
                        right
                    </div>
                </div>
                <div className={'h-[5rem]'}>
                    bottom
                </div>
            </div>
            <Image
                className={css.character}
                src={'/1.png'}
                width={200}
                height={0} alt={'wile e'}/>
        </div>
    );
};

export default ProductList;
