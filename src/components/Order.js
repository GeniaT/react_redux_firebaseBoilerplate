import React from 'react';
import AddItemForm from './AddItemForm';
import { getItemDescriptionFromId } from '../selectors/selectors';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "0"
    }
  }

  addItem(item) {
    const amountToAdd = Number(item.quantity) * Number(item["unit-price"]);
    let alreadyOrdered = false;
    if (this.state.items.length > 0) {
      this.state.items.forEach((x) => {
        if (x["product-id"] === item["product-id"]) {
          console.log("Product id already ordered");
          alreadyOrdered = true
        }
      });
      if (!alreadyOrdered) {
        this.setState((prevState) => ({
          items:[...this.state.items, item],
          total: parseFloat(Number(prevState.total) + amountToAdd).toFixed(2)
        }));
        this.props.updateOrder(this.state);
      }
    } else {
      this.setState(() => ({
        items:[...this.state.items, item],
        total: parseFloat(amountToAdd).toFixed(2)
      }));
      this.props.updateOrder(this.state);
    }
  }

  removeItem(id) {
    let amountToRemove;
    if (this.state.items.length === 1) {
      return this.setState({
        total: "0",
        items: []
      })
    }
    this.state.items.forEach((item) => {
      if (item["product-id"] === id) {
        amountToRemove = Number(item.quantity) * Number(item["unit-price"]);
      }
    })
    this.setState((prevState) => ({
      items: this.state.items.filter((item) => item["product-id"] !== id),
      total: parseFloat(Number(prevState.total) - amountToRemove).toFixed(2)
    }))
  }

  componentDidMount() {
    let sum = 0;
    const itemsInitInState = new Promise((resolve, reject) => {
      this.setState({
        id: this.props.location.state.order.id,
        'customer-id': this.props.location.state.order['customer-id'],
        items: this.props.location.state.order.items
      });
      resolve(this);
    })

    itemsInitInState.then((data) => {
      data.state.items.forEach((x) => sum += x.total);
      this.setState({total: parseFloat(sum).toFixed(2)})
    })
  }


  render() {
    return (
      <div>
        <h1>Order overview</h1>
        {this.state.items && this.state.items.length > 0 && <div>
          <table>
            <thead>
              <tr>
                <th>{'Item Id'}</th>
                <th>{'Description'}</th>
                <th>{'Unit price'}</th>
                <th>{'Quantity'}</th>
                <th>{'Total'}</th>
              </tr>
            </thead>
            <tbody>
            {this.state.items && this.state.items.map((item, index) =>
              <tr key={index}>
                <td>{item["product-id"]}</td>
                <td>{getItemDescriptionFromId(item["product-id"])}</td>
                <td>{item["unit-price"]}</td>
                <td>{item.quantity}</td>
                <td>{(item.quantity * item["unit-price"]).toFixed(2)}</td>
                <td><button onClick={() => this.removeItem(item["product-id"])}>{'X'}</button></td>
              </tr>
            )}
            </tbody>
          </table>
          </div>
        }
        <h2>{'Total value this order: '}{this.state.total}</h2>
        <AddItemForm addItem={item => this.addItem(item)}/>
      </div>
    )
  }

}

export default Order;
