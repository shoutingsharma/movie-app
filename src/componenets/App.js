import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";


class App extends React.Component  {
  componentDidMount (){
    //make api call
    //dispatch action
    const {store} =this.props;
    store.subscribe(() => {
      // console.log(listner);
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    //  console.log('state',this.props.store.getState());
  }
  render(){
  const {list}= this.props.store.getState();
  return (
    <div className="App">
    <Navbar />
    <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favourites</div>
      </div>
      <div className="list">
         {list.map((movie,index) =>(
          <MovieCard movie={movie} key={index} />
         ))}
      </div>
    </div>
    </div>
  );
         }
}

export default App;
