import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

const App = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <section>
                <Header>Kitchen Room</Header>
            </section>
        </div>
    );
};

export default App;