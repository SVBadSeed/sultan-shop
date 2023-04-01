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

    const [imageUrl, setImageUrl] = React.useState<string>('')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        // @ts-ignore
        setImageUrl(fileReader.result)
    }
    const onChange = (event) => {
        const file = (event.target.files[0])
        fileReader.readAsDataURL(file)
    }

    const editItem = (event) => {
        const selected = [...event.target[9]].filter((option) => option.selected).map(option => option.value)


        const editItem = {
            imageUrl: imageUrl || itemById.imageUrl,
            name: event.target[0].value || itemById.name,
            type: event.target[3].value || itemById.type,
            size: +(event.target[4].value) || itemById.size,
            barcode: +(event.target[6].value) || itemById.barcode,
            producer: event.target[2].value || itemById.producer,
            brand: event.target[7].value || itemById.brand,
            description: event.target[1].value || itemById.description,
            price: +(event.target[5].value) || itemById.price,
            typeCare: selected || itemById.typeCare,
            id: id
        }

        setVisibleEdit(false)
        dispatch(EditItem(editItem))
    }
    return (
        <>
            {visibleEdit && <div onClick={() => setVisibleEdit(false)} className='modal modal-admin'>
                <form onSubmit={(event) => editItem(event)}
                      onClick={(event) => event.stopPropagation()}
                      className='modal-content modal-content__admin'>
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
                        <input onChange={onChange} className='modal-image' type='file'></input>
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
                    <span> Пометка по типу ухода: кликните один раз по типу ухода если хотите выбрать его</span>
                    <button type='submit'>Редактировать карточку</button>
                </form>
            </div>}
        </>
    )
}

export default AdminEditModal