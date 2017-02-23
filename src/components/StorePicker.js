import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    constructor(props) {
        super(props);

        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(e) {
        e.preventDefault();
        // First grab text from input box
        // Second go from / to /store/:storeId
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" ref={(input) => {this.storeInput = input}} required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store ➡</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
