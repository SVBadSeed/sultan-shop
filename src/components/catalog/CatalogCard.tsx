import React from 'react'

import '../../assets/scss/components/_card.scss'
import {Link} from "react-router-dom"
import ButtonCart from "../../UI/ButtonCart"

type CatalogCardProps = {
    imageUrl: string,
    name: string,
    type: string,
    size: number,
    barcode: number,
    producer: string,
    brand: string,
    description: string,
    price: number,
    typeCare: string[],
    id: string,
    count: number
}
const CatalogCard: React.FC<CatalogCardProps> = ({
                                                     id,
                                                     imageUrl,
                                                     name,
                                                     type,
                                                     size,
                                                     barcode,
                                                     producer,
                                                     brand,
                                                     description,
                                                     price,
                                                     typeCare,
                                                     count
                                                 }) => {

    return (
        <div className='card'>
            <img className='card-image' src={imageUrl} alt='/'/>
            <div className='card-content'>
                <div className='card-size'> {(type === 'мл') ?
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.23" clipPath="url(#clip0_56_1553)">
                            <path
                                d="M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35937 14.9097 1.20937 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z"
                                fill="#3F4E65"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_56_1553">
                                <rect width="9" height="15" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> :
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.23" clipPath="url(#clip0_56_1572)">
                            <path
                                d="M13.3035 7.99994C12.7753 7.99994 12.2785 7.71869 12.0097 7.26869L10.0003 3.93743L7.9941 7.26869C7.72222 7.72181 7.22535 8.00306 6.69722 8.00306C6.5566 8.00306 6.41597 7.98431 6.2816 7.94368L2.00035 6.71868V12.2812C2.00035 12.7406 2.31285 13.1406 2.7566 13.2499L9.51285 14.9406C9.8316 15.0187 10.166 15.0187 10.4816 14.9406L17.2441 13.2499C17.6878 13.1374 18.0003 12.7374 18.0003 12.2812V6.71868L13.7191 7.94056C13.5847 7.98119 13.4441 7.99994 13.3035 7.99994ZM19.9472 4.49368L18.3378 1.28118C18.241 1.08743 18.0316 0.974934 17.816 1.00306L10.0003 1.99993L12.866 6.75306C12.9847 6.94994 13.2222 7.04368 13.4441 6.98118L19.6285 5.21556C19.9378 5.12493 20.0878 4.78118 19.9472 4.49368V4.49368ZM1.66285 1.28118L0.0534711 4.49368C-0.0902789 4.78118 0.0628461 5.12493 0.369096 5.21243L6.55347 6.97806C6.77535 7.04056 7.01285 6.94681 7.1316 6.74993L10.0003 1.99993L2.1816 1.00306C1.96597 0.978059 1.75972 1.08743 1.66285 1.28118V1.28118Z"
                                fill="#3F4E65"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_56_1572">
                                <rect width="20" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                } {size} {type}</div>
                <Link to={`/card/${barcode}`}
                      state={{
                          imageUrl,
                          name,
                          type,
                          size,
                          barcode,
                          producer,
                          brand,
                          description,
                          price,
                          typeCare,
                          id,
                          count
                      }}
                      className='card-name'>{name} <span className='card-description'>{description}</span></Link>
                <div className='card-barcode'>Штрихкод:<span> {barcode}</span></div>
                <div className='card-produce'>Производитель: <span> {producer}</span></div>
                <div className='card-brand'>Бренд: <span> {brand}</span></div>
                <div className='card-type'>Тип ухода: <span>{typeCare}</span></div>
                <div className='card-price'>{price} ₸
                    <ButtonCart
                        name={name}
                        type={type}
                        size={size}
                        brand={brand}
                        price={price}
                        barcode={barcode}
                        imageUrl={imageUrl}
                        producer={producer}
                        typeCare={typeCare}
                        description={description}
                        id={id}/>
                </div>
            </div>
        </div>
    )
}

export default CatalogCard