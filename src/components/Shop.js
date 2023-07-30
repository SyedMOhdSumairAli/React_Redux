import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const { des, withdra } = bindActionCreators(actionCreators, dispatch)
    return (

        <div className='container'>
            <h2>Your bank</h2>
            <button className='btn btn-primary mx-2' onClick={() => { des(100) }}> +</button>
            <p>add your card</p>
            <button className='btn btn-primary mx-2' onClick={() => { withdra(100)}}>-</button>
        </div >

    )
}

export default Shop
