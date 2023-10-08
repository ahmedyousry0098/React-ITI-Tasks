import React, { Component } from 'react'

class Product extends Component {
    render() {
        const {id, name, category, price, stock} = this.props.product
        return (
            <div className='card col-lg-4 gx-2'>
                <h2 className='text-center'>{name}</h2>
                <div className='d-flex flex-column card-body'>
                    <p className='text-center m-0 p-0'>Category: {category}</p>
                    <p className='text-center m-0 p-0'>Stock: {stock}</p>
                    <p className='text-center m-0 p-0 text-success fw-bold'>Price: {price}</p>
                </div>
                <div>
                    <button onClick={() => this.props.increasePrice(id, 10)} className='btn btn-info w-100 my-2'>Increase Price</button>
                    <button onClick={() => this.props.decreasePrice(id, -10)} className='btn btn-dark w-100 my-2'>decrease Price</button>
                    <button onClick={() => this.props.deleteProduct(id)} className='btn btn-danger w-100 my-2'>Delete</button>
                </div>
            </div>
        )
    }
}

export default Product