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
        const savedProducts = JSON.parse(localStorage.getItem('products')) || this.state.products
        this.setState({
            products: savedProducts
        })
    }

    componentDidMount() {}

    componentWillUnmount = () => {
        localStorage.setItem('products', JSON.stringify(this.state.products))
    }

    deleteProduct = (id) => {
        this.setState(prevState => {
            const filteredProducts = prevState.products.filter(product => product.id != id)
            return ({
                products: filteredProducts
            })
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
                if(product += amount >= 0) {
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
            {this.state.products.map(product => {
                return (
                    <Product 
                        key={product.id} 
                        product={product} 
                        deleteProduct={this.deleteProduct}
                        increasePrice={this.increasePrice}
                        decreasePrice={this.decreasePrice}
                    />
                )}
            )}
        </div>
    }
}

export default Home