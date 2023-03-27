import React from 'react'
import cx from 'classnames'
import {useDispatch} from "react-redux"
import {setSearchProducers} from "../redux/filter/FilterSlice"

type InputSearchProps = {
    inputSearch: string
}
const InputSearch: React.FC<InputSearchProps> = ({inputSearch}) => {
    const dispatch = useDispatch()

    const getDataForm = (data) => {
        data.preventDefault()
        dispatch(setSearchProducers(data.target.firstChild.value))
        data.target.firstChild.value = ''
    }
    return (
        <form onSubmit={(event) => getDataForm(event)} className={cx('input-search', inputSearch)}>
            <input type='search' placeholder='Поиск...'/>
            <button>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5297 16.5294L13.0992 13.0928L16.5297 16.5294ZM15.0002 8.5C15.0002 10.2239 14.3154 11.8772 13.0964 13.0962C11.8775 14.3152 10.2242 15 8.50024 15C6.77634 15 5.12304 14.3152 3.90405 13.0962C2.68506 11.8772 2.00024 10.2239 2.00024 8.5C2.00024 6.77609 2.68506 5.12279 3.90405 3.90381C5.12304 2.68482 6.77634 2 8.50024 2C10.2242 2 11.8775 2.68482 13.0964 3.90381C14.3154 5.12279 15.0002 6.77609 15.0002 8.5V8.5Z"
                        stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
            </button>
        </form>
    )
}

export default InputSearch