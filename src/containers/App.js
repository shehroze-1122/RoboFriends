import React,{Component} from 'react';
import CardArray from '../components/CardArray.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            searchValue: '',
            robots: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {
            this.setState({robots:user});
        })
    }
    searchEntry=(event)=>{
        this.setState({ searchValue: event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });
        if(this.state.robots.length===0){
            return (<div className="center">
                        <h1>Loading...</h1>
                    </div>);
        }
        else{
            return(
                <React.Fragment>
                    <div className="tc">
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={this.searchEntry}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardArray robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>   
                </React.Fragment>
            );
        }
    }
}
export default App;