import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            number: ''
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.getGifs(this.state.searchTerm, this.state.number);
        console.log(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" onChange={this.handleChange} placeholder="Search"/>
                <input type="text" name="number" onChange={this.handleChange} placeholder="Number of GIFs"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default SearchBar;