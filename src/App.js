import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Channels from './components/channel';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
        ],
      };

    constructor() {
        super();
        console.log('App - Constructor')
    }

    componentDidMount() {
        console.log('App - Mounted')
    }
    
    handleDelete = (counterId) => {
    console.log("Event handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })  // simplifying counters : counters
    };

    handleReset = () => {
    const counters =  this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters })
    }

    handleIncrement = (counter) => {
    const counters = [...this.state.counters]   // cloning array
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }            // clone object
    counters[index].value++;
    this.setState({ counters })
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters]   // cloning array
        const index = counters.indexOf(counter)
        counters[index] = { ...counter }            // clone object
        counters[index].value--;
        this.setState({ counters })
        };

    render() { 
        return (
            <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length}/>
            <div className='content'>

                <Route path="/admin" component={Counters} />
                <Route path="/" component={Channels} />
            </div>
            {/*
            <main className='container'>
                <Channels />
                <Counters 
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    counters={this.state.counters}
                />
            </main>
            */}
            </React.Fragment>
        );
    }
}
 
export default App;