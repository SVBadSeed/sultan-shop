import React from 'react'

import '../../scss/components/_adminPanel.scss'

import cards from "../../cards.json"

import {useDispatch, useSelector} from "react-redux"
import {selectFilter} from "../../redux/filter/selectors"
import AdminItem from "./AdminItem"
import AdminModal from "../adminModal/AdminModal"
import {initItems} from "../../redux/filter/FilterSlice"
import AdminEditModal from "../adminModal/AdminEditModal"

const AdminPanel: React.FC = () => {
    const dispatch = useDispatch()
    let {items} = useSelector(selectFilter)

    const [visible, setVisible] = React.useState(false)
    const [visibleEdit, setVisibleEdit] = React.useState(false)

    const addCardHandler = () => {
        setVisible(true)
    }

    if (items.length === 0) {
        dispatch(initItems(cards))
    }

    return (
        <div className='admin-panel'>
            <div className='container'>
                <button onClick={addCardHandler} className='admin-panel__button-add'>Добавить новую карточку</button>
                <div className='admin-panel__items'>
                    {items.map((item) => (
                        <AdminItem key={item.id} {...item} setVisibleEdit={setVisibleEdit}/>
                    ))}
                </div>
            </div>
            <AdminModal visible={visible} setVisible={setVisible}/>
            <AdminEditModal visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit}/>
        </div>
    )
}

export default AdminPanel