import React, {useEffect} from 'react'
import ReactPaginate from "react-paginate"

import '../../assets/scss/components/_pagination.scss'
import {useDispatch, useSelector} from "react-redux"
import {selectFilter} from "../../redux/filter/selectors"
import {setCurrentPage} from "../../redux/filter/FilterSlice"

const Pagination = () => {
    const dispatch = useDispatch()
    const {currentPage} = useSelector(selectFilter)

    let pageCount = 2
    const pageRangeDisplayed = 15

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    // useEffect(() => {
    //     pageCount = Math.floor(itemsShow.length / pageRangeDisplayed)
    //
    // }, [pageCount])

    return (
        <ReactPaginate
            className='pagination'
            breakLabel="..."
            nextLabel={<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.7143L5.625 8L0 2.28571L1.125 0L9 8L1.125 16L0 13.7143Z" fill="#FFC85E"/>
            </svg>
            }
            previousLabel={<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2.28571L3.375 8L9 13.7143L7.875 16L2.54292e-07 8L7.875 9.83506e-08L9 2.28571Z"
                      fill="#FFC85E"/>
            </svg>}
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={pageRangeDisplayed}
            pageCount={pageCount}
            forcePage={currentPage - 1}/>
    )
}

export default Pagination