import React from 'react'
import {EditItem} from "../../redux/filter/FilterSlice"
import {useDispatch, useSelector} from "react-redux"
import {selectCardById, selectFilter} from "../../redux/filter/selectors"

type AdminModalProps = {
    visibleEdit: boolean,
    setVisibleEdit: any
}

const AdminEditModal: React.FC<AdminModalProps> = ({visibleEdit, setVisibleEdit}) => {
    const dispatch = useDispatch()
    const {id} = useSelector(selectFilter)
    const itemById = useSelector(selectCardById(id))

    const editItem = (event) => {
        const editItem = {
            imageUrl: event.target[8].value || itemById.imageUrl,
            name: event.target[0].value || itemById.name,
            type: event.target[3].value || itemById.type,
            size: +(event.target[4].value) || itemById.size,
            barcode: +(event.target[6].value) || itemById.barcode,
            producer: event.target[2].value || itemById.producer,
            brand: event.target[7].value || itemById.brand,
            description: event.target[1].value || itemById.description,
            price: +(event.target[5].value) || itemById.price,
            typeCare: [event.target[10].value, event.target[9].value || itemById.typeCare],
            id: id
        }

        setVisibleEdit(false)
        dispatch(EditItem(editItem))
    }

    return (
        <>
            {visibleEdit && <div onClick={() => setVisibleEdit(false)} className='modal'>
                <form onSubmit={(event) => editItem(event)}
                      onClick={(event) => event.stopPropagation()}
                      className='modal-content'>
                    <h2>Поменяйте поля на нужные вам для редактиварония карточки</h2>
                    <label>
                        Название товара
                        <input className='modal-name' type='text'></input>
                    </label>
                    <label>
                        Текст товара
                        <input className='modal-desc' type='text'></input>
                    </label>
                    <label>
                        Производитель товара
                        <select className='modal-producer'>
                            <option></option>
                            <option>Grifon</option>
                            <option>Boyscout</option>
                            <option>Булгари грин</option>
                            <option>Paclan</option>
                            <option>Adidas</option>
                            <option>Нэфис</option>
                            <option>Camay</option>
                            <option>Nivea</option>
                        </select>
                    </label>
                    <label>
                        Тип товара (мл, г)
                        <select className='modal-type'>
                            <option></option>
                            <option>мл</option>
                            <option>г</option>
                        </select>
                    </label>
                    <label>
                        Размер товара
                        <input className='modal-size' type='number'></input>
                    </label>
                    <label>
                        Цена товара
                        <input className='modal-price' type='number'></input>
                    </label>
                    <label>
                        Штрихкод товара
                        <input className='modal-barcode' type='number'></input>
                    </label>
                    <label>
                        Бренд товара
                        <select className='modal-brand'>
                            <option></option>
                            <option>Grifon</option>
                            <option>Boyscout</option>
                            <option>Булгари грин</option>
                            <option>Paclan</option>
                            <option>Adidas</option>
                            <option>Нэфис</option>
                            <option>Camay</option>
                            <option>Nivea</option>
                        </select>
                    </label>
                    <label>
                        Картинка товара
                        <input className='modal-image' type='file'></input>
                    </label>
                    <label>
                        Тип ухода товара
                        <select className='modal-typeCare'>
                            <option></option>
                            <option>УХОД ЗА ТЕЛОМ</option>
                            <option>УХОД ЗА РУКАМИ</option>
                            <option>УХОД ЗА НОГАМИ</option>
                            <option>УХОД ЗА ЛИЦОМ</option>
                            <option>УХОД ЗА ВОЛОСАМИ</option>
                            <option>СРЕДСТВА ДЛЯ ЗАГАРА</option>
                            <option>ПОДАРОЧНЫЕ НАБОРЫ</option>
                            <option>ГИГИЕНИЧЕСКАЯ ПРОДУКЦИЯ</option>
                            <option>ГИГИЕНА ПОЛОСТИ РТА</option>
                            <option>БУМАЖНАЯ ПРОДУКЦИЯ</option>
                        </select>
                    </label>
                    <label>
                        Тип ухода товара (можно ввести еще)
                        <select className='modal-typeCare'>
                            <option></option>
                            <option>УХОД ЗА ТЕЛОМ</option>
                            <option>УХОД ЗА РУКАМИ</option>
                            <option>УХОД ЗА НОГАМИ</option>
                            <option>УХОД ЗА ЛИЦОМ</option>
                            <option>УХОД ЗА ВОЛОСАМИ</option>
                            <option>СРЕДСТВА ДЛЯ ЗАГАРА</option>
                            <option>ПОДАРОЧНЫЕ НАБОРЫ</option>
                            <option>ГИГИЕНИЧЕСКАЯ ПРОДУКЦИЯ</option>
                            <option>ГИГИЕНА ПОЛОСТИ РТА</option>
                            <option>БУМАЖНАЯ ПРОДУКЦИЯ</option>
                        </select>
                    </label>
                    <button type='submit'>Редактировать карточку</button>
                </form>
            </div>}
        </>
    )
}

export default AdminEditModal