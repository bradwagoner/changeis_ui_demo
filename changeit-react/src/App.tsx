import {Route, Routes} from 'react-router-dom'
import React, {Component} from 'react';
import './App.scss';
import {FakerData} from "./components/routed/FakerData";
import {FakerDataCarousel} from "./components/routed/FakerDataCarousel";
import {Home} from "./components/routed/Home";

// function App() {
export class App extends Component<{}, {}> {

    render() {
        return (
            <div id='app'>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/" element={<FakerData/>}/>
                    <Route path="/faker-data" element={<FakerData/>}/>
                    <Route path="/faker-data-carousel" element={<FakerDataCarousel/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
