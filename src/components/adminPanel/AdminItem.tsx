import React from 'react'

import {useDispatch, useSelector} from "react-redux"
import {deleteCard, getItemId} from "../../redux/filter/FilterSlice"
import {selectCardById} from "../../redux/filter/selectors"
import {removeItem} from "../../redux/cart/CartSlice"

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
            dispatch(removeItem(props.id))
        }
    }
    const editCardHandler = () => {
        props.setVisibleEdit(true)

        dispatch(getItemId(itemById.id))
    }

    return (
        <div className='admin-panel__item'>
            <div className='admin-panel__content'>
                <div className='admin-panel__content-image'>
                    <span>Картинка</span>
                    <img src={props.imageUrl} alt=""/>
                </div>
                <div className='admin-panel__content-name'>
                    <span>Название</span>
                    <p> {props.name} </p>
                </div>
                <div className='admin-panel__content-text'>
                    <span>Описание</span>
                    <p> {props.description} </p>
                </div>
                <div className='admin-panel__content-size'>
                    <span>Размер</span>
                    <p> {props.size} </p>
                </div>
                <div className='admin-panel__content-type'>
                    <span>Тип</span>
                    <p> {props.type} </p>
                </div>
                <div className='admin-panel__content-typeCare'>
                    <span>Тип ухода</span>
                    <p> {props.typeCare} </p>
                </div>
                <div className='admin-panel__content-brand'>
                    <span>Бренд</span>
                    <p> {props.brand} </p>
                </div>
                <div className='admin-panel__content-producer'>
                    <span>Производитель</span>
                    <p> {props.producer} </p>
                </div>
                <div className='admin-panel__content-price'>
                    <span>Цена</span>
                    <p>{props.price}</p>
                </div>
                <div className='admin-panel__content-barcode'>
                    <span>Штрихкод</span>
                    <p>{props.barcode}</p>
                </div>
            </div>
            <button onClick={deleteCardHandler} className='admin-panel__button-delete'>Удалить карточку</button>
            <button onClick={editCardHandler} className='admin-panel__button-edit'>Редактировать
                карточку
            </button>
        </div>
    )
}

export default AdminItem