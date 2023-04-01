import React from 'react'
import {useDispatch} from "react-redux"
import {addItem} from "../../redux/filter/FilterSlice"

type AdminModalProps = {
    visible: boolean,
    setVisible: any
}
const url = '/upload'
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

    const selectTypeCare = []
    const onSubmitHandler = async (event) => {
        event.preventDefault()

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
            typeCare: selectTypeCare,
            id: String(Math.random())
        }

        setVisible(false)
        dispatch(addItem(newItem))
    }

    const selectChange = (event) => {
        selectTypeCare.push(event.target.value)
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
                        <select size={10} onClick={selectChange} multiple className='modal-typeCare'>
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
                    <div> Сводка по выбору типов: чтобы выбрать нужные вам типы, просто кликните по ним.</div>
                    <button type='submit'> Создать карточку</button>
                </form>
            </div>}
        </>
    )
}

export default AdminModal