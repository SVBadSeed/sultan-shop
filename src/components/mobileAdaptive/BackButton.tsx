import React from 'react'

import '../../scss/components/_mobileAdaptive.scss'

const BackButton: React.FC = () => {
    return (
        <div className='container'>
            <button className='back-button'>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L1 5L5 9" stroke="#3F4E65"/>
                </svg>
                Назад
            </button>
        </div>
    )
}

export default BackButton