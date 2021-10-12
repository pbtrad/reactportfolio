import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const SampleComponent = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

const App = () => {
    return(<div>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={SampleComponent} />
                <Route path="/about" exact component={SampleComponent} />
                <Route path="/projects" exact component={SampleComponent} />
                <Route path="/skills" exact component={SampleComponent} />
                <Route path="/contact" exact component={SampleComponent} />
            </div>
        </BrowserRouter>
    </div>);
};

export default App;