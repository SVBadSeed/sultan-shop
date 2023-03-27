import React from 'react'
import styles from "./ButtonPrice.module.scss"

const ButtonPrice = () => {
    return (
        <button className={styles.price}>
            Прайс-лист
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.9583 6.375H11.1249V2.125H6.87492V6.375H4.04159L8.99992 12.0417L13.9583 6.375ZM3.33325 13.4583H14.6666V14.875H3.33325V13.4583Z"
                    fill="white"/>
            </svg>
        </button>
    )
}

export default ButtonPrice