import React,{Component} from 'react';
import CardArray from '../components/CardArray.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField, fetchRobots } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';


const mapStateToProps=(state)=>{
    return {
        searchValue: state.changeSearchField.searchValue, 
        robots: state.assignRobots.robots,
        error: state.assignRobots.error,
        isPending: state.assignRobots.isPending
    };
}
const mapDispatchToProps=(dispatch)=>{
    return {
        searchEntry: (event)=>dispatch(setSearchField(event.target.value)),
        getRobots: () => dispatch(fetchRobots())
    };
}

class App extends Component{

    componentDidMount(){
        this.props.getRobots();
    }

    render(){
        const { searchValue,searchEntry, robots, isPending } = this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        if(isPending){
            return (<div className="center">
                        <CircularProgress color="secondary" />
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