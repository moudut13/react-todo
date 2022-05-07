import React, { Component } from 'react';

class OnChange extends Component {
    constructor(props){
        super(props)
        this.state = {
                changeValue : '',
        }
    } 

    handelChange = (e) => {
        this.setState({
            changeValue : e.target.value
        })
    }
    render() { 
        return (
            <div>
                <h5>Class Component OnChange Event</h5>
               <input type="text" onChange={this.handelChange} />
               <p>{this.state.changeValue}</p>
               <br/>
               <br/>
            </div>
        );
    }
}
 
export default OnChange;