import React, { Component } from 'react';

class AddFishForm extends Component {
    nameRef= React.createRef();
    priceRef= React.createRef();
    statusRef= React.createRef();
    descRef= React.createRef();
    imageRef = React.createRef();
    createFish = event =>
    {
        event.preventDefault();
        console.log(this.nameRef)
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    };
    render() {
        return (
            <React.Fragment>
            <form className="fish-edit" onSubmit={this.createFish.bind(this)}>
               <input name="name" ref="this.nameRef" type="text"  placeholder="name"/>
               <input name="price" ref="this.priceRef" type="text"  placeholder="price"/>
               <select name="status"  ref="this.statusRef"> 
                    <option>Available</option>
                    <option>Fresh</option>
                    <option>Out of stock</option>
               </select>
               <textarea name="desc" ref="this.descRef" placeholder="desc"/>
               <input name="image" ref="this.imageRef" type="text"  placeholder="image"/>
               <button type= "submit"> Add fish</button>
            </form>
            </React.Fragment>
        );
    }
}

export default AddFishForm;