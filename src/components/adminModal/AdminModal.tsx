import React from 'react'
import {useDispatch} from "react-redux"
import {addItem} from "../../redux/filter/FilterSlice"

type AdminModalProps = {
    visible: boolean,
    setVisible: any
}

const AdminModal: React.FC<AdminModalProps> = ({visible, setVisible}) => {
    const dispatch = useDispatch()
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const newItem = {
            imageUrl: event.target[8].value,
            name: event.target[0].value,
            type: event.target[3].value,
            size: +(event.target[4].value),
            barcode: +(event.target[6].value),
            producer: event.target[2].value,
            brand: event.target[7].value,
            description: event.target[1].value,
            price: +(event.target[5].value),
            typeCare: [event.target[9].value, event.target[10].value],
            id: String(Math.random())
        }

        setVisible(false)
        dispatch(addItem(newItem))
    }

    return (
        <>
            {visible && <div onClick={() => setVisible(false)} className='modal'>
                <form onSubmit={(event) => onSubmitHandler(event)}
                      onClick={(event) => event.stopPropagation()}
                      className='modal-content'>
                    <h2>Заполните поля чтобы создать карточку</h2>
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
                    <button type='submit'> Создать карточку</button>
                </form>
            </div>}
        </>
    )
}

export default AdminModal