import React, { Component } from 'react';
import Preview from './components/Preview';
import logo from './images/fcc-logo.png';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

initialString = 

`# Heading

## Subheading

    <html>
      <head>
      </head>
    </html>

${'`This is an inline code.`'}

[Click me](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

1. A list item.

> This is a blockquote.

![freeCodeCamp logo](${logo})

***FreeCodeCamp Markdown Project by thiagogrn***.`;

  componentDidMount = () => {
    this.setState({input: this.initialString})
  }

  handleChange = e => this.setState({input: e.target.value})

  render() {
    return (
      <div className="container">
        <div className="editor-container">
          <div className="editor-header">
          <i className="icon fa-solid fa-pen-to-square"></i>Editor
          </div>
          <textarea id="editor" onChange={this.handleChange} value={this.state.input}>
          </textarea>
        </div>
        <Preview text={this.state.input}/>
      </div>
    )
  }
}

export default App;