import React, {useEffect, useRef} from 'react'

import '../../scss/components/_sort.scss'
import {useDispatch, useSelector} from "react-redux"
import {setFilterSort} from "../../redux/filter/FilterSlice"
import {selectFilter} from "../../redux/filter/selectors"

const sortArr = [
    {
        title: 'Название(по возр.)',
        sortProperty: 'title'
    }, {
        title: 'Название(по уб.)',
        sortProperty: '-title'
    }, {
        title: 'Цена(по возр.)',
        sortProperty: 'price'
    }, {
        title: 'Цена(по уб.)',
        sortProperty: '-price'
    },
]

const Sort: React.FC = () => {
    const dispatch = useDispatch()
    const {sortValue} = useSelector(selectFilter)

    const sortRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = React.useState(false)

    const onClickListItem = (sortItem) => {
        dispatch(setFilterSort(sortItem))
        setVisible(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setVisible(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)

        return () => document.body.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div ref={sortRef} className='sort'>
            <div className='sort-label'>
                <b>Сортировка: </b>
                <span onClick={() => setVisible(!visible)}>{sortValue.title}
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                            </svg>
                            </span>
            </div>
            {visible && <div className='sort-popup'>
                <ul>
                    {sortArr.map((item, i) => (
                        <li onClick={() => onClickListItem(item)} key={i}>{item.title}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default Sort