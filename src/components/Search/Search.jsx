import { ArrowRightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isOpenAction } from '../../redux/actions/isOpenAction'
import { searchTextAction } from '../../redux/actions/productAction'



const Search = () => {
    const [searchText, setSearchText] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        if (searchText) {
            dispatch(searchTextAction(searchText))
            navigate('/collection/all')
            dispatch(isOpenAction(false))
        }
    }
    return (
        <div className='h-screen w-full overflow-hidden bg-black text-white'>
            <div className='pr-4 pt-4'>
                <span className='p-4 cursor-pointer float-right h-4 w-4 bg-white text-black rounded-full flex items-center justify-center' onClick={() => dispatch(isOpenAction(false))}>X</span>
            </div>
            <div className='w-full h-[90%] flex items-center justify-center'>

                <div className=' w-[30%] m-auto relative'>
                    <form onSubmit={handleSearch}>
                        <input
                            autoFocus
                            type="text"
                            className='bg-black outline-none placeholder:text-white py-3 text-4xl w-full animate-textInputSearch'
                            placeholder='Gõ để tìm kiếm . . . '
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <span className={`absolute h-[2px] bg-white  -bottom-3 left-0 animate-wiggle w-full`}></span>
                        <button className='absolute right-0 top-[50%] translate-y-[-50%] animate-arrowSearch delay-1000'>
                            <ArrowRightOutlined style={{ fontSize: '24px', color: 'white' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
