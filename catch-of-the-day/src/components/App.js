import React from "react"
import Header from "../components/Header"
import Inventory from "../components/Inventory"
import Order from '../components/Order';
class App extends React.Component{
    state = {
        fishes: {},
        order:{}
    };
    addFish =  fish => {
        const fishes = {...this.state.fishes}
        fishes[`fish{Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        });
    }
    render() {
        return(
            <div className = "catch-of-the-day">
                <div className = "menu">
                    <Header tagline = "Fresh seafood market" age={29}/>
                </div>               
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        );
    }
}

export default App;