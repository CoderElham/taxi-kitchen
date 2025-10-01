import React, { Suspense } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import States from './Components/States/States';
import OrderContainer from './Components/OrderContainer/OrderContainer';

// Load Data
const loadOrders = () => fetch('/orders.json').then(res => res.json())

const App = () => {

    const orderPromise = loadOrders()

    return (
        <div>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <section>
                <Header>Kitchen Room</Header>
            </section>
            <section>
                <Suspense fallback={<span>Loading...⌛</span>}>
                    <OrderContainer orderPromise={orderPromise}></OrderContainer>
                </Suspense>
            </section>
        </div>
    );
};

export default App;