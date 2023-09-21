import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
    return(
        <h1>Hiii Dev!!!</h1>
    );
}

const AppLayout = () => {
    return(<App/>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);