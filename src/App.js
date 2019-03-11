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

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  render() {
    const { groceries } = this.state;

    return (
      <div className="App">
        <GroceryForm addItem={this.addItem} /> 
        <List name="Grocery List" items={groceries} />
      </div>
      );
  }
}

export default App;