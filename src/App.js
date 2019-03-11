import React from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import './App.css';

class App extends React.Component {
  state = { groceries: [] };

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqueId(), complete: false }
    this.setState({ groceries: [...groceries, grocery] });
  }

  emptyClick = (groceries) => {
    this.setState({
      groceries: groceries.filter( grocery => {
        return grocery.complete === false
      })
    })
  }

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  groceryClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  render() {
    const { groceries } = this.state;

    return (
      <div className="App">
        <GroceryForm addItem={this.addItem} /> 
        <List 
          name="Grocery List" 
          groceries={groceries} 
          groceryClick={this.groceryClick} 
          emptyClick={this.emptyClick} 
        />
      </div>
      );
  }
}

export default App;