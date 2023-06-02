import React from 'react';
import {Main} from "./pages/main/Main";
import {Loading} from "./components/loading/Loading";
// import './App.css';

function App() {
    const loaded = true
    return (
        <div>
            {loaded ? <Main/> : <Loading/>}
        </div>
    );
}

export default App;
