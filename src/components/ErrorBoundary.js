import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError){
            return (<h1>Ooops, we ran into a problem. Couldn't get the robots</h1>);
        }else{
            return this.props.children;
        }   
    }
}

export default ErrorBoundary;