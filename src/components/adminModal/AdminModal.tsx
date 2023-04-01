import React from 'react'
import {useDispatch} from "react-redux"
import {addItem} from "../../redux/filter/FilterSlice"

type AdminModalProps = {
    visible: boolean,
    setVisible: any
}

const AdminModal: React.FC<AdminModalProps> = ({visible, setVisible}) => {
    const dispatch = useDispatch()

    const [imageUrl, setImageUrl] = React.useState()
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        // @ts-ignore
        setImageUrl(fileReader.result)
    }
    const onChange = (event) => {
        const file = (event.target.files[0])
        fileReader.readAsDataURL(file)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const selected = [...event.target[9]].filter((option) => option.selected).map(option => option.value)

        const newItem = {
            imageUrl: imageUrl,
            name: event.target[0].value,
            type: event.target[3].value,
            size: +(event.target[4].value),
            barcode: +(event.target[6].value),
            producer: event.target[2].value,
            brand: event.target[7].value,
            description: event.target[1].value,
            price: +(event.target[5].value),
            typeCare: selected,
            id: String(Math.random())
        }

        setVisible(false)
        dispatch(addItem(newItem))
    }

    return (
        <>
            {visible && <div onClick={() => setVisible(false)} className='modal modal-admin'>
                <form onSubmit={(event) => onSubmitHandler(event)}
                      onClick={(event) => event.stopPropagation()}
                      className='modal-content modal-content__admin'>
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
                        <input onChange={onChange} accept='.jpg, .png, .gif' className='modal-image' type='file'/>
                    </label>
                    <label>
                        Тип ухода товара (можно выбрать несколько)
                        <select name='typeCareArr[]' size={10} multiple
                                className='modal-typeCare'>
                            <option value='УХОД ЗА ТЕЛОМ'>УХОД ЗА ТЕЛОМ</option>
                            <option value='УХОД ЗА РУКАМИ'>УХОД ЗА РУКАМИ</option>
                            <option value='УХОД ЗА НОГАМИ'>УХОД ЗА НОГАМИ</option>
                            <option value='УХОД ЗА ЛИЦОМ'>УХОД ЗА ЛИЦОМ</option>
                            <option value='УХОД ЗА ВОЛОСАМИ'>УХОД ЗА ВОЛОСАМИ</option>
                            <option value='СРЕДСТВА ДЛЯ ЗАГАРА'>СРЕДСТВА ДЛЯ ЗАГАРА</option>
                            <option value='ПОДАРОЧНЫЕ НАБОРЫ'>ПОДАРОЧНЫЕ НАБОРЫ</option>
                            <option value='ГИГИЕНИЧЕСКАЯ ПРОДУКЦИЯ'>ГИГИЕНИЧЕСКАЯ ПРОДУКЦИЯ</option>
                            <option value='ГИГИЕНА ПОЛОСТИ РТА'>ГИГИЕНА ПОЛОСТИ РТА</option>
                            <option value='БУМАЖНАЯ ПРОДУКЦИЯ'>БУМАЖНАЯ ПРОДУКЦИЯ</option>
                        </select>
                    </label>
                    <div> Сводка по выбору типов: чтобы выбрать нужные вам типы, просто кликните по ним.</div>
                    <button type='submit'> Создать карточку</button>
                </form>
            </div>}
        </>
    )
}

export default AdminModal