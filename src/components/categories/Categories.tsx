import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setCategoryId, setFilterCategories} from "../../redux/filter/FilterSlice"
import {selectFilter} from "../../redux/filter/selectors"

import '../../assets/scss/components/_categories.scss'

const allCategories = ['Уход за телом', 'Уход за руками', 'Уход за ногами', 'Уход за лицом', 'Уход за волосами',
    'Средства для загара', 'Подарочные наборы', 'Гигиеническая продукция', 'Гигиена полости рта', 'Бумажная продукция']


const Categories = () => {
    const dispatch = useDispatch()
    const {categoryId} = useSelector(selectFilter)

    const onChangeCategory = (id: number, event) => {
        dispatch(setCategoryId(id))
        dispatch(setFilterCategories(event.target.innerText.toUpperCase()))
    }

    return (
        <ul className='categories'>
            {allCategories.map((categoryName, i) => (
                <li className={categoryId === i ? 'active' : ''}
                    onClick={(event) => onChangeCategory(i, event)} key={i}>{categoryName}</li>
            ))}
        </ul>
    )
}

export default Categories