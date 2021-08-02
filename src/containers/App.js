import React,{Component} from 'react';
import CardArray from '../components/CardArray.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField } from '../actions';


const mapStateToProps=(state)=>{
    return {searchValue:state.searchValue};
}
const mapDispatchToProps=(dispatch)=>{
    return {searchEntry:(event)=>dispatch(setSearchField(event.target.value))};
}

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {
            console.log(user)
            this.setState({robots:user});
        })
    }

    render(){
        const { robots } = this.state;
        const { searchValue,searchEntry } = this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        if(robots.length===0){
            return (<div className="center">
                        <h1>Loading...</h1>
                    </div>);
        }
        else{
            return(
                <React.Fragment>
                    <div className="tc">
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={searchEntry}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);