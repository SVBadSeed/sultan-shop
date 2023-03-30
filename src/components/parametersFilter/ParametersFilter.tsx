import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {selectFilter} from "../../redux/filter/selectors"

import '../../scss/components/_catalogParameters.scss'
import {setCategoryId, setFilterCategories} from "../../redux/filter/FilterSlice"

const ParametersFilter = () => {
    const dispatch = useDispatch()
    const {categoryId} = useSelector(selectFilter)

    const getCategoryId = (event) => {
        const id = Number(event.target.id)
        dispatch(setCategoryId(id))
        dispatch(setFilterCategories(event.target.innerText.toUpperCase()))
    }

    return (
        <div className='catalog-parameters__filter'>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='0' className={categoryId === 0 ? 'active' : ''}>Уход
                    за
                    телом</h3>
                <li>Эпиляция и депиляция</li>
                <li>Средства для ванны и душа</li>
                <li>Скрабы, пилинги и пр.</li>
                <li>Мочалки и губки для тела</li>
                <li>Кремы, лосьоны, масла</li>
                <li>Интимный уход</li>
                <li>Дезодоранты, антиперспиранты</li>
                <li>Гели для душа</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='1' className={categoryId === 1 ? 'active' : ''}>Уход
                    за руками</h3>
                <li>Увлажнение и питание</li>
                <li>Средства для ногтей</li>
                <li>Мыло твердое</li>
                <li>Мыло жидкое</li>
                <li>Крем для рук</li>
                <li>Защита рук</li>
                <li>Жидкость для снятия лака</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='2' className={categoryId === 2 ? 'active' : ''}>Уход
                    за ногами</h3>
                <li>Скрабы, пилинги</li>
                <li>Пилки, ролики</li>
                <li>Крем для ног</li>
                <li>Дезодоранты для ног</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='3' className={categoryId === 3 ? 'active' : ''}>Уход
                    за лицом</h3>
                <li>Тональные средства</li>
                <li>Средства для снятия макияжа</li>
                <li>Средства для очищения</li>
                <li>Маски, скрабы, сыворотки</li>
                <li>Крем для лица</li>
                <li>Крем для век</li>
                <li>Жидкость для снятия макияжа</li>
                <li>Гигиеническая помада</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='4'
                    className={categoryId === 4 ? 'active' : ''}>Средства для загара</h3>
                <li>Средства после загара</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='5'
                    className={categoryId === 5 ? 'active' : ''}>Средства для бритья</h3>
                <li>Станки и кассеты</li>
                <li>После бритья</li>
                <li>Для бритья</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='6'
                    className={categoryId === 6 ? 'active' : ''}>Подарочные наборы</h3>
                <li>Для мужчин</li>
                <li>Для женщин</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='7'
                    className={categoryId === 7 ? 'active' : ''}>Гигиеническая продукция</h3>
                <li>Туалетная бумага</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='8'
                    className={categoryId === 8 ? 'active' : ''}>Гигиена полости рта</h3>
                <li>Бальзам для горла</li>
                <li>Зубные щетки</li>
            </ul>
            <ul className='catalog-parameters__filter-items'>
                <h3 onClick={(event) => getCategoryId(event)} id='9'
                    className={categoryId === 9 ? 'active' : ''}>Бумажная продукция</h3>
                <li>Влажные салфетки</li>
                <li>Сухие салфетки</li>
            </ul>
        </div>
    )
}

export default ParametersFilter