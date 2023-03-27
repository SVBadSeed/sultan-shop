import React, {ChangeEvent, useCallback} from 'react'

import debounce from 'lodash.debounce'
import {useDispatch, useSelector} from "react-redux"
import {selectFilter} from "../../redux/filter/selectors"

import '../../assets/scss/components/_catalogParameters.scss'

import InputSearch from "../../UI/InputSearch"
import ParametersFilter from "../parametersFilter/ParametersFilter"
import {
    setFilterProducers,
    setFilterProducersReverse,
    setMaxPrice,
    setMinPrice
} from "../../redux/filter/FilterSlice"

const CatalogParameters: React.FC = () => {
    const producers = [
        {
            title: 'Grifon',
            count: 0
        }, {
            title: 'Boyscout',
            count: 0
        }, {
            title: 'Булгари грин',
            count: 0
        }, {
            title: 'Paclan',
            count: 0
        }, {
            title: 'Adidas',
            count: 0
        }, {
            title: 'Нэфис',
            count: 0
        }, {
            title: 'Camay',
            count: 0
        }, {
            title: 'Nivea',
            count: 0
        }
    ]

    const dispatch = useDispatch()
    const {value} = useSelector(selectFilter)
    let {items} = useSelector(selectFilter)
    let {categoryFilter} = useSelector(selectFilter)

    const [visible, setVisible] = React.useState(4)

    items.map((item) => {
        return producers.map((producer) => {
            if (item.producer === producer.title && item.typeCare.includes(categoryFilter)) return producer.count++
        })
    })

    const producerChangeHandler = (event) => {
        if (event.target.checked === true) {
            dispatch(setFilterProducers(event.target.parentNode.textContent))
        } else {
            dispatch(setFilterProducersReverse(event.target.parentNode.textContent))
        }
    }

    const updateMaxPrice = useCallback(
        debounce((str: string) => {
            dispatch(setMaxPrice(str))
        }, 400), []
    )

    const updateMinPrice = useCallback(
        debounce((str: string) => {
            dispatch(setMinPrice(str))
        }, 400), []
    )

    const priceMinChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updateMinPrice(event.target.value)
    }
    const priceMaxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updateMaxPrice(event.target.value)
    }
    const {placeholder} = useSelector(selectFilter)

    return (
        <div className='catalog-parameters'>
            <h3>Подбор по параметрам</h3>
            <div className='catalog-parameters__price'>
                <div>
                    Цена <svg width="9" height="11" viewBox="0 0 9 11" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.50142 2.93608H0.621449V4.24858H3.78338V11H5.3196V4.24858H8.50142V2.93608ZM8.50142 0.818182H0.621449V2.13068H8.50142V0.818182Z"
                        fill="#111111"/>
                </svg>
                </div>
                <div className='catalog-parameters__inputs'>
                    <input onChange={(event) => priceMinChangeHandler(event)} type='number'
                           placeholder={placeholder.min} min={0}/> -
                    <input onChange={(event) => priceMaxChangeHandler(event)} type='number'
                           placeholder={placeholder.max}/>
                </div>
            </div>
            <h4>Производитель</h4>
            <div className='catalog-parameters__producer'>
                <InputSearch inputSearch={'input-search input-search__filter'}/>
                <ul className='catalog-parameters__producer-items'>
                    {producers.filter((producer) => {
                        return producer.title.toLowerCase().includes(value.toLowerCase())
                    }).slice(0, visible).map((producer, id) => (
                        <li key={id}>
                            <label>
                                <input onClick={(event) => producerChangeHandler(event)} type="checkbox"/>
                                {producer.title}
                            </label>
                            ({producer.count})
                        </li>
                    ))}
                </ul>
                {visible === 4 ?
                    <button onClick={() => setVisible(100000)} className='catalog-parameters__producer-show'>Показать
                        все <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                        </svg>
                    </button>
                    :
                    <button onClick={() => setVisible(4)} className='catalog-parameters__producer-show'>Скрыть
                        все <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65"/>
                        </svg>
                    </button>}
            </div>
            <ParametersFilter/>
        </div>
    )
}

export default CatalogParameters