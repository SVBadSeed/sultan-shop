import React from 'react'

import {useDispatch, useSelector} from "react-redux"
import {deleteCard, getItemId} from "../../redux/filter/FilterSlice"
import {selectCardById} from "../../redux/filter/selectors"

type AdminItemProps = {
    imageUrl: string,
    name: string,
    type: string,
    size: number,
    barcode: number,
    producer: string,
    brand: string,
    description: string,
    price: number,
    typeCare: string[],
    id: string,
    setVisibleEdit: any
}

const AdminItem: React.FC<AdminItemProps> = (props) => {
    const dispatch = useDispatch()
    const itemById = useSelector(selectCardById(props.id))

    const deleteCardHandler = () => {
        if (window.confirm('Вы точно хотите удалить карточку товара?')) {
            dispatch(deleteCard(props.id))
        }
    }
    const editCardHandler = () => {
        props.setVisibleEdit(true)

        dispatch(getItemId(itemById.id))
    }

    return (
        <div className='admin-panel__item'>
            <div className='admin-panel__title'>
                <span className='admin-panel__img'>Картинка</span>
                <span>Название</span>
                <span className='admin-panel__desc'>Описание</span>
                <span>Размер</span>
                <span>Тип</span>
                <span>Тип ухода</span>
                <span>Бренд</span>
                <span>Производитель</span>
                <span>Цена</span>
                <span>Штрихкод</span>
            </div>
            <div className='admin-panel__content'>
                <img className='admin-panel__content-image' src={props.imageUrl} alt=""/>
                <div className='admin-panel__content-name'>{props.name}</div>
                <div className='admin-panel__content-text'>{props.description}</div>
                <div className='admin-panel__content-size'>{props.size}</div>
                <div className='admin-panel__content-type'>{props.type}</div>
                <div className='admin-panel__content-typeCare'>{props.typeCare}</div>
                <div className='admin-panel__content-brand'>{props.brand}</div>
                <div className='admin-panel__content-producer'>{props.producer}</div>
                <div className='admin-panel__content-price'>{props.price}</div>
                <div className='admin-panel__content-barcode'>{props.barcode}</div>
            </div>
            <button onClick={deleteCardHandler} className='admin-panel__button-delete'>Удалить карточку</button>
            <button onClick={editCardHandler} className='admin-panel__button-edit'>Редактировать
                карточку
            </button>
        </div>
    )
}

export default AdminItem