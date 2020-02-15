import React from 'react';
import axios from 'axios'

import './App.css';
import StockEventsTable from './components/StockEventsTable'


//2 Data Types

//Products
const fetchedProducts = [
  {id: 1, name: "Super Maroo"},
  {id: 2, name: "Weege's monsoon"}
]

//stockEvents
const fetchedStockEvents = [
  {id: 1, type: 'add', qty: 100, product: fetchedProducts[0]},
  {id: 2, type: 'remove', qty: -20, product: fetchedProducts[0]},
  {id: 3, type: 'remove', qty: -10, product: fetchedProducts[0]},

  {id: 4, type: 'add', qty: 120, product: fetchedProducts[1]},
  {id: 5, type: 'remove', qty: -45, product: fetchedProducts[1]},
   // type: 'add' || 'remove'
]

//We are going to fetch all of the stock events

//We are going to separate them by the different products

//We are going to display them
class App extends React.Component{
  state = {
    fetchedProducts,
    fetchedStockEvents,
  }

  async componentDidMount(){

    const productsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    })

    const stockEventsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    })
    console.log("App.componentDidMount stockEventsRes", stockEventsRes)

    const fetchedProducts = productsRes.data
    const fetchedStockEvents = stockEventsRes.data

    this.setState({fetchedProducts, fetchedStockEvents})
  }

  render(){
    console.log("App.render")
    const {fetchedProducts, fetchedStockEvents} = this.state

    return (
      <div className="App">
        <h1>The Stock App</h1>

        <StockEventsTable
          products={fetchedProducts}
          stockEvents={fetchedStockEvents}
        />

      </div>
    );
  }
}

export default App;
