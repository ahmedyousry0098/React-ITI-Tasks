import { Component } from "react";
import Product from "../Product/Product";

class Home extends Component {
    state = {
        products: [
            {
                id: 1,
                name: "Iphone",
                price: 50000,
                stock: 10,
                category: "Mobile"
            },
            {
                id: 2,
                name: "BMW",
                price: 3000000,
                stock: 3,
                category: "Car"
            },
            {
                id: 3,
                name: "TV",
                price: 12000,
                stock: 17,
                category: "Intertainment"
            },
            {
                id: 4,
                name: "Watch",
                price: 8000,
                stock: 21,
                category: "Accessories"
            }
        ]
    }

    constructor() {
        super()
    }

    componentDidMount () {
        const savedProducts = JSON.parse(localStorage.getItem('products')) || this.state.products
        this.setState({
            products: savedProducts
        })
    }

    componentDidUpdate() {
        this.saveToStorage()
    }

    saveToStorage = () => {
        localStorage.setItem('products', this.state.products)
    }

    deleteProduct = (id) => {
        const filteredProducts = this.state.products.filter(product => product.id != id)
        this.setState({
            products: filteredProducts
        })
    }

    increasePrice = (id, amount) => {
        const state = {...this.state}
        state.products.map(product => {
            if (product.id == id) {
                product.price += amount
            }
            return product
        })
        this.setState(state)
    }

    decreasePrice = (id, amount) => {
        const state = {...this.state}
        state.products.map(product => {
            if (product.id == id) {
                if(product.price += amount >= 0) {
                    product.price += amount
                }
            }
            return product
        })
        this.setState(state)
    }

    render () {
        return <div className="row container mx-auto">
            <h1 className="text-center my-3">Home Component</h1>
            {
                this.state.products.map(product => {
                    return (
                        <Product 
                            key={product.id} 
                            product={product} 
                            deleteProduct={this.deleteProduct}
                            increasePrice={this.increasePrice}
                            decreasePrice={this.decreasePrice}
                        />
                    )}
                )
            }

            <button onClick={this.saveToStorage} className='btn btn-success w-100 my-3'>Add Last Update To Storage</button>
        </div>
    }
}

export default Home