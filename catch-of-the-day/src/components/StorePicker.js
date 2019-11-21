import React from 'react'
import {getFunName} from '../helpers'

class StorePicker extends React.Component{
    myInput = React.createRef();
    goToStore = event => {
        event.preventDefault();
        const inputValue = this.myInput.current.value;
         
        this.props.history.push(`/store/${inputValue}`);
    };
    render(){
      return (
          <React.Fragment>
                <form className = "store-selector" onSubmit = {this.goToStore}>
                    <p>Enter store</p>
                    <input type="text" 
                            ref= {this.myInput}
                           defaultValue={getFunName()} 
                           required 
                           placeholder="Store Name"/>
                    <button type="submit">Visit store</button>
                </form>
            </React.Fragment>
      )
    }
}

export default StorePicker