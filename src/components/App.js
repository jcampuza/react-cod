import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
    
    constructor(props) {
        super();
        
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

        // initial state
        this.state = {
            fishes: {},
            order: {}
        };

    }

    addFish(fish) {
        // update our state
        // first take a copy of state
        // then add in new fish
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        
        // set state
        this.setState({ fishes: fishes });
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes 
        });
    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fishes">
                        {Object
                            .keys(this.state.fishes)
                            .map(fish => {
                                return <Fish key={fish} details={this.state.fishes[fish]} />;
                            })
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App