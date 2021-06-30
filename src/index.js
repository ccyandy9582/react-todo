import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types'


class Todo extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: '', // initial the input
      item: []  // initial the todolist
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit(event) {
    this.setState({
      item: [
        ...this.state.item, // spread the item list
        this.state.text     // add the new item
      ]
    })
    // event.preventDefault()
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <InputField 
          handleSubmit={this.handleSubmit} 
          onChange={this.onChange}
        />
        <TodoList items = {this.state.item} />
      </div>
    )
  }
}
class InputField extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input 
            onChange={this.props.onChange} 
            value={this.props.text} 
          />
          <button style={{marginLeft: 10+'px'}}>Add</button>
        </form>
      </div>
    )
  }
}
class TodoList extends React.Component {
  render() {
    let todoItems = []
    this.props.items.forEach((item, index) => {
      todoItems.push(<TodoItem key={index} item={item} />)
    });
    console.log(todoItems);
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}
class TodoItem extends React.Component {
  render() {
    return (
      <li>{this.props.item}</li>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
  <div style={{margin: 10+'%'}}>
      {/* <App /> */}
      <Todo />
  </div>
    </React.StrictMode>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
