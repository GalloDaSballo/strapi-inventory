import React from 'react'

class StockDetail extends React.Component{
  state = {
    show: false
  }

  render(){
    const {name, total, stockEvents} = this.props
    const {show} = this.state
    return(
      <div className="StockDetail" onClick={() => this.setState({show: !show})}>
        <h2>Product: {name}  | Total: {total}</h2>
        {show &&
          <div>
            {stockEvents.map(event => (
              <div className="StockEventTable__Card">
                <p>Id: {event.id}</p>
                <p>Type: {event.type}</p>
                <p>Quantity: {event.qty}</p>
                <p>Product Name: {event.product.name}</p>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}


export default StockDetail
