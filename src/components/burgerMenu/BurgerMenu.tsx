import React from 'react'

import '../../scss/components/_mobileAdaptive.scss'

const BurgerMenu: React.FC = () => {
    return (
        <div className='burger'>
            <svg width="20" height="20" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.799805 4.5999H9.1998V3.3999H0.799805V4.5999ZM0.799805 7.5999H9.1998V6.3999H0.799805V7.5999ZM0.799805 0.399902V1.5999H9.1998V0.399902H0.799805Z"
                    fill="white"/>
            </svg>
        </div>
    )
}

export default BurgerMenu