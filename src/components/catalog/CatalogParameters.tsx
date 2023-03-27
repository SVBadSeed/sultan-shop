import React from 'react'

import {useSelector} from "react-redux"
import {selectFilter} from "../../redux/filter/selectors"

import '../../assets/scss/components/_catalogParameters.scss'

import InputSearch from "../../UI/InputSearch"

const CatalogParameters = () => {
    const [visible, setVisible] = React.useState(4)
    const allProducers = ['Grifon', 'Boyscout', 'Булгари грин', 'Paclan', 'Adidas', 'Нэфис', 'Camay', 'Nivea']
    const {value} = useSelector(selectFilter)
    const {categoryId} = useSelector(selectFilter)

    console.log(categoryId)

    const onChangeCategory = (event) => {

    }

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
                    <input type='number' placeholder='0'/> - <input type='number' placeholder='10000'/>
                </div>
            </div>
            <h4>Производитель</h4>
            <div className='catalog-parameters__producer'>
                <InputSearch inputSearch={'input-search input-search__filter'}/>
                <ul className='catalog-parameters__producer-items'>
                    {allProducers.filter((producer) => {
                        return producer.toLowerCase().includes(value.toLowerCase())
                    }).slice(0, visible).map((producer, id) => (
                        <li key={id}>
                            <label>
                                <input type="checkbox"/>
                                {producer}
                            </label>
                            ()
                        </li>
                    ))}
                </ul>
                {visible === 4 ?
                    <button onClick={() => setVisible(100000)} className='catalog-parameters__producer-show'>Показать
                        все <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65"/>
                        </svg>
                    </button> :
                    <button onClick={() => setVisible(4)} className='catalog-parameters__producer-show'>Скрыть
                        все <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65"/>
                        </svg>
                    </button>}
            </div>
            <div className='catalog-parameters__filter'>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 0 ? 'active' : ''}>
                        <button onClick={(event) => onChangeCategory(event)}>Уход за телом</button>
                    </h3>
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
                    <h3 className={categoryId === 1 ? 'active' : ''}>Уход за руками</h3>
                    <li>Увлажнение и питание</li>
                    <li>Средства для ногтей</li>
                    <li>Мыло твердое</li>
                    <li>Мыло жидкое</li>
                    <li>Крем для рук</li>
                    <li>Защита рук</li>
                    <li>Жидкость для снятия лака</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 2 ? 'active' : ''}>Уход за ногами</h3>
                    <li>Скрабы, пилинги</li>
                    <li>Пилки, ролики</li>
                    <li>Крем для ног</li>
                    <li>Дезодоранты для ног</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 3 ? 'active' : ''}>Уход за лицом</h3>
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
                    <h3 className={categoryId === 4 ? 'active' : ''}>Средства для загара</h3>
                    <li>Средства после загара</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 5 ? 'active' : ''}>Средства для бритья</h3>
                    <li>Станки и кассеты</li>
                    <li>После бритья</li>
                    <li>Для бритья</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 6 ? 'active' : ''}>Подарочные наборы</h3>
                    <li>Для мужчин</li>
                    <li>Для женщин</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 7 ? 'active' : ''}>Гигиеническая продукция</h3>
                    <li>Туалетная бумага</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 8 ? 'active' : ''}>Гигиена полости рта</h3>
                    <li>Бальзам для горла</li>
                    <li>Зубные щетки</li>
                </ul>
                <ul className='catalog-parameters__filter-items'>
                    <h3 className={categoryId === 9 ? 'active' : ''}>Бумажная продукция</h3>
                    <li>Влажные салфетки</li>
                    <li>Сухие салфетки</li>
                </ul>
            </div>
        </div>
    )
}

export default CatalogParameters