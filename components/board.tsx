import t from '@css/app.module.scss'
import clsx from "clsx";
import Image from "next/image";

const {board} = t

export const Board = ({
                          title = 'Refined Plastic Cheese',
                          description = 'The automobile layout consists of a' +
                          ' front-engine design, with transaxle-type transmissions ' +
                          'mounted at the rear of the engine and four wheel drive',
                          imageSrc = 'https://picsum.photos/id/526/640/480',
                          price = 55630.92,
                          priceCurrency = "eur",
                          act = false
                      }) => {
    return <div className={clsx('fixed flex p-3 max-h-full ', act && t.act,
        'flex-wrap lg:w-[300px] flex-row ',
        'lg:flex-col right-10 top-[25%]',
        'max-lg:right-auto max-lg:left-2 max-lg:right-2 max-lg:top-5', board)}>
        <h1 className={'color-light lh-relaxed flex my-4 max-lg:w-full max-lg:my-2 px-1 items-center'}>
            <span className={'flex-1'}>{title}</span>
            <span className={'text-sm color-neutral ml-3'}>{priceCurrency} {price}</span>
        </h1>
        <div className={'w-full h-[150px] bg-amber rounded-lg overflow-hidden max-lg:w-[100px] max-lg:h-[100px]'}>
            <Image
                fill={true}
                src={imageSrc} alt={'name'}
            />
        </div>
        <div className={'flex-1 items-start justify-items-start max-lg:ml-4'}>
            <p className={'color-blueGray py-4'}>
                {description}
            </p>
        </div>
    </div>
}