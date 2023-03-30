import React from 'react'

import '../../scss/components/_mobileAdaptive.scss'
import Categories from "../categories/Categories"

const MobileCategory: React.FC = () => {

    return (
        <div className='catalog-parameters__mobile'>
            Подбор по параметрам
            <button className='catalog-parameters__btn'>
                <svg width="15" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#3F4E65"/>
                </svg>
            </button>
            <Categories/>
        </div>
    )
}

export default MobileCategory