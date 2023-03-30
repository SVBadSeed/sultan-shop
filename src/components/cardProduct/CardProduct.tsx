import React, {useState} from 'react'
import {useLocation} from "react-router-dom"

import '../../scss/components/_cardProduct.scss'
import {useDispatch, useSelector} from "react-redux"
import {addItem, CartItemType, itemMinus} from "../../redux/cart/CartSlice"
import {selectCartItemById} from "../../redux/cart/selectors"

const CardProduct: React.FC = () => {
    const [visibleDesc, setVisibleDesc] = useState(false)
    const [characters, setCharacters] = useState(false)

    const dispatch = useDispatch()
    const {state} = useLocation()

    const id = state.id
    const cartItem = useSelector(selectCartItemById(id))
    const addedCount = cartItem ? cartItem.count : 0

    const item = {
        imageUrl: state.imageUrl,
        name: state.name,
        type: state.type,
        size: state.size,
        barcode: state.barcode,
        producer: state.producer,
        brand: state.brand,
        description: state.description,
        price: state.price,
        typeCare: state.typeCare,
        id,
        count: state.count++
    }

    const onClickPlus = () => {
        dispatch(addItem(item as CartItemType))
    }

    const onClickMinus = () => {
        dispatch(itemMinus(id))
    }

    const onClickAdd = () => {
        dispatch(addItem(item))
    }

    return (
        <div className='card-product'>
            <div className='container'>
                <img className='card-product__image' src={state.imageUrl} alt="/"/>
                <div className='card-product__content'>
                    <div className='card-product__availability'>В наличии</div>
                    <div className='card-product__name'>{state.name}<span
                        className='card-product__text'>{state.description}</span>
                    </div>
                    <div className='card-size'>{(state.type === 'мл') ?
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
                        </svg>} {state.size} {state.type}</div>
                    <div className='card-product__count-container'>
                        <div
                            className='card-product__price'>{addedCount <= 0 ? state.price : state.price * cartItem.count} ₸
                        </div>
                        <div className="card-product__count">
                            <button onClick={addedCount <= 1 ? () => {
                            } : onClickMinus} className="card-product__btn">-
                            </button>
                            <b>{addedCount <= 0 ? 0 : addedCount}</b>
                            <button onClick={onClickPlus} className="card-product__btn">+</button>
                        </div>
                        <button onClick={onClickAdd} className='card-button'>в корзину
                            <svg width="25" height="18" viewBox="0 0 25 18"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.448 4.09209C24.2955 3.87908 24.0909 3.77258 23.8341 3.77258H7.48756L7.0439 2.61757C6.93156 2.23889 6.77908 1.91543 6.58649 1.6472C6.39389 1.37897 6.18926 1.18963 5.97259 1.07918C5.75592 0.968728 5.56734 0.893781 5.40684 0.854335C5.24635 0.814889 5.08585 0.795166 4.92536 0.795166H1.62717C1.41852 0.795166 1.24198 0.866169 1.09753 1.00817C0.953083 1.15018 0.880859 1.33163 0.880859 1.55253C0.880859 1.67876 0.912959 1.80104 0.977157 1.91938C1.04136 2.03772 1.13364 2.12844 1.25401 2.19155C1.37438 2.25467 1.49877 2.28622 1.62717 2.28622H4.92536C4.98955 2.28622 5.04974 2.29411 5.10591 2.30989C5.16209 2.32567 5.23832 2.39273 5.33462 2.51107C5.43092 2.62941 5.51117 2.80691 5.57537 3.04359L9.02832 12.5248C9.06042 12.6195 9.11258 12.7102 9.1848 12.797C9.25703 12.8838 9.34129 12.9508 9.43758 12.9982C9.53388 13.0455 9.6382 13.0692 9.75055 13.0692H20.1507C20.3112 13.0692 20.4596 13.0218 20.5961 12.9272C20.7325 12.8325 20.8248 12.7142 20.8729 12.5722L24.5563 4.79029C24.6365 4.53783 24.6004 4.3051 24.448 4.09209ZM19.621 11.5545H10.3524L7.89682 5.2873H22.7266L19.621 11.5545ZM18.2328 13.8905C17.7031 13.8905 17.2497 14.0759 16.8726 14.4467C16.4954 14.8175 16.3068 15.2633 16.3068 15.784C16.3068 16.3047 16.4954 16.7504 16.8726 17.1212C17.2497 17.492 17.7031 17.6774 18.2328 17.6774C18.7624 17.6774 19.2158 17.492 19.593 17.1212C19.9701 16.7504 20.1587 16.3047 20.1587 15.784C20.1587 15.2633 19.9701 14.8175 19.593 14.4467C19.2158 14.0759 18.7624 13.8905 18.2328 13.8905ZM11.2993 13.8905C10.9462 13.8905 10.6212 13.9773 10.3243 14.1509C10.0274 14.3245 9.79469 14.5532 9.62617 14.8373C9.45765 15.1213 9.37339 15.4368 9.37339 15.784C9.37339 16.3047 9.56197 16.7504 9.93913 17.1212C10.3163 17.492 10.7697 17.6774 11.2993 17.6774C11.829 17.6774 12.2824 17.492 12.6595 17.1212C13.0367 16.7504 13.2253 16.3047 13.2253 15.784C13.2253 15.6577 13.2133 15.5315 13.1892 15.4053C13.1651 15.2791 13.129 15.1607 13.0808 15.0503C13.0327 14.9398 12.9725 14.8333 12.9003 14.7308C12.8281 14.6282 12.7478 14.5335 12.6595 14.4467C12.5713 14.36 12.475 14.2811 12.3706 14.2101C12.2663 14.1391 12.158 14.0799 12.0456 14.0326C11.9333 13.9852 11.8129 13.9497 11.6845 13.9261C11.5561 13.9024 11.4277 13.8905 11.2993 13.8905Z"
                                    fill="white"/>
                            </svg>
                        </button>
                        {/*<ButtonCart/>*/}
                    </div>
                    <div className='card-product__list'>
                        <div className='card-product__list-share'>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.00004 13.5C4.87469 13.4974 5.71626 13.1653 6.35704 12.57L12.617 16.147C12.4073 16.9666 12.4998 17.8343 12.8775 18.5913C13.2552 19.3483 13.893 19.9439 14.674 20.2692C15.455 20.5944 16.327 20.6274 17.1304 20.3623C17.9338 20.0971 18.6148 19.5515 19.0488 18.8252C19.4827 18.099 19.6406 17.2408 19.4935 16.4076C19.3464 15.5745 18.9042 14.8222 18.2478 14.2885C17.5914 13.7548 16.7647 13.4753 15.919 13.5013C15.0734 13.5273 14.2655 13.857 13.643 14.43L7.38304 10.853C7.44904 10.603 7.48504 10.344 7.49104 10.085L13.641 6.56996C14.2332 7.10874 14.9927 7.42747 15.792 7.47268C16.5913 7.51789 17.3818 7.28684 18.031 6.81828C18.6802 6.34972 19.1484 5.67217 19.3572 4.89929C19.5661 4.1264 19.5027 3.30522 19.1779 2.5735C18.853 1.84178 18.2864 1.24404 17.5731 0.88056C16.8597 0.517083 16.0431 0.409982 15.2602 0.577226C14.4772 0.744469 13.7756 1.17588 13.2731 1.79909C12.7705 2.42229 12.4976 3.19937 12.5 3.99996C12.504 4.28796 12.543 4.57497 12.617 4.85296L6.93304 8.09997C6.60341 7.59003 6.1468 7.17461 5.60805 6.89454C5.06931 6.61446 4.46697 6.47936 3.86021 6.50251C3.25346 6.52566 2.66316 6.70627 2.14732 7.02658C1.63148 7.34689 1.20785 7.79589 0.918041 8.32946C0.628232 8.86303 0.48222 9.46282 0.494351 10.0699C0.506482 10.677 0.676338 11.2704 0.98723 11.792C1.29812 12.3136 1.73936 12.7453 2.26758 13.0447C2.7958 13.3442 3.39284 13.5011 4.00004 13.5Z"
                                    fill="#FFC85E"/>
                            </svg>
                        </div>
                        <div className='card-product__list-text'>
                            При покупке от <b>10 000 ₸ </b>бесплатная <br/>
                            доставка по Кокчетаву и области
                        </div>
                        <div className='card-product__list-download'>
                            Прайс лист <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.958 4.375H8.12467V0.125H3.87467V4.375H1.04134L5.99967 10.0417L10.958 4.375ZM0.333008 11.4583H11.6663V12.875H0.333008V11.4583Z"
                                fill="#3F4E65"/>
                        </svg>
                        </div>
                    </div>
                    <div className='card-produce'>Производитель: <span>{state.producer}</span></div>
                    <div className='card-brand'>Бренд: <span>{state.brand}</span></div>
                    <div className='card-articul'>Артикул: <span>460404</span></div>
                    <div className='card-barcode'>Штрихкод: <span>{state.barcode}</span></div>
                    <div className='card-product__description'>
                        {visibleDesc === true ? <button onClick={() => setVisibleDesc(!visibleDesc)}>
                            Описание <svg width="7" height="6" viewBox="0 0 7 6"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65"/>
                        </svg>
                        </button> : <button onClick={() => setVisibleDesc(!visibleDesc)}>
                            Описание <svg width="7" height="6" viewBox="0 0 7 6" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                        </svg>
                        </button>}
                        {visibleDesc ?
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
                                vestibulum sagittis iaculis <br/> iaculis. Quis mattis vulputate feugiat massa
                                vestibulum
                                duis.
                                Faucibus consectetur aliquet sed pellentesque <br/> consequat consectetur congue mauris
                                venenatis.
                                Nunc elit, dignissim sed nulla ullamcorper enim, <br/> malesuada.
                            </p> : ''}
                    </div>
                    <div className='card-product__characters'>
                        {characters === true ? <button onClick={() => setCharacters(!characters)}>
                            Характеристики <svg width="7" height="6" viewBox="0 0 7 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65"/>
                        </svg>
                        </button> : <button onClick={() => setCharacters(!characters)}>
                            Характеристики <svg width="7" height="6" viewBox="0 0 7 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                        </svg>
                        </button>}
                        {characters ? <>
                            <div className='card-characters'>Назначение: <span>{state.name}</span></div>
                            <div className='card-characters'>Тип: <span>{state.type}</span></div>
                            <div className='card-characters'>Производитель: <span>{state.producer}</span></div>
                            <div className='card-characters'>Бренд: <span>{state.brand}</span></div>
                            <div className='card-characters'>Артикул: <span>460404</span></div>
                            <div className='card-characters'>Штрихкод: <span>{state.barcode}</span></div>
                            <div className='card-characters'>Вес: <span>{state.size} {state.type}</span></div>
                            <div className='card-characters'>Объем: <span>{state.size} {state.type}</span></div>
                            <div className='card-characters'>Кол-во в коробке: <span>{state.size} {state.type}</span>
                            </div>
                        </> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardProduct