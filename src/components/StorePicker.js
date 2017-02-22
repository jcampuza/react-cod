import React from 'react';

class StorePicker extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        window.location = 'store/' + this.textInput.value;
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={this.handleSubmit}>
                <h2>Please Enter a Store</h2>
                <input type="text" ref={(input) => {this.textInput = input;}} required placeholder="Store Name" />
                <button type="submit">Visit Store ➡</button>
            </form>
        )
    }
}

export default StorePicker;
