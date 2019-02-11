import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import GifContainer from '../GifContainer';

const API_KEY = 'gZon1vnojMM39Co8dYOSf9SAaztUTsXe';

class MainContainer extends Component{
    constructor(){
        super();
        this.state = {
            gifs: []
        }
    }
    getGifs = async (searchTerm, number)=>{
        try{
            console.log('gettin those gifs');
            const apiResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=${number}`);
            if(!apiResponse.ok){
                throw Error(apiResponse.statusText);
            }
            const parsed = await apiResponse.json();
            this.setState({
                gifs: parsed.data
            });

        }catch(err){
            console.log(err);
            return err;
        }
        
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <SearchBar getGifs={this.getGifs}/>
                <GifContainer gifList={this.state.gifs} />
                
            </div>
        )
    }
}

export default MainContainer;