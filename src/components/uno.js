import React from "react";

class App extends React.Component{
    render() {
        return <div>
                <GrandMother data="Hello World"/>
        </div>
    }
}

class GrandMother extends React.Component{
        constructor(props){
            super(props);
        }
    render(){
        return <div>
            <Mother data={this.props.data}/>
        </div>
    }
}

class Mother extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <Child data={this.props.data}/>
        </div>
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <div>
            {this.props.data}
        </div>
    }
}

const MyContext = React.createContext({});
export const MyContextProvider = MyContext.Provider;
export const MyContextConsumer = MyContext.Consumer;