import React, { Component } from 'react';
import Markdown from 'marked-react';

class Preview extends Component {
    render() {
        return (
            <div className="preview-container">
                <div className="preview-header">
                    <i className="icon fa-solid fa-eye"></i>Preview
                </div>
                <div id="preview">
                    <Markdown>{this.props.text}</Markdown>
                </div>
            </div>
        )
    }
}

export default Preview;
