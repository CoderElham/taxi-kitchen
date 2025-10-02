import React, { use, useState } from 'react';
import States from '../States/States';
import Card from '../Card/Card';
import Cookingcard from '../Card/Cookingcard';

const OrderContainer = ({ orderPromise }) => {
    const orders = use(orderPromise);

    // State Declare for cooking
    const [cookingItem, setCookingItem] = useState([])


    const handleOrder = (order) => {
        const onExist = cookingItem.find(item => item.id == order.id)
        if (onExist) {
            alert("Already Cooking... 🧑‍🍳")
            return
        }

        const newCookingItem = [...cookingItem, order];
        setCookingItem(newCookingItem);
    }


    return (
        <div>
            <States cookingItem={cookingItem} orders={orders}></States>

            <section className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 py-10 gap-5'>
                <div className='lg:col-span-7'>
                    <h1 className='text-3xl font-bold'>Cuurent Order</h1>
                    <div>
                        {
                            orders.map(order => <Card handleOrder={handleOrder} key={order.id} order={order}></Card>)
                        }
                    </div>
                </div>
                <div className='lg:col-span-5'>
                    <h1 className='text-3xl font-bold'>Cooking</h1>
                    <div className='shadow p-10 space-y-3'>
                        {
                            cookingItem.map(order => <Cookingcard key={order.id} order={order}></Cookingcard>)
                        }
                    </div>
                    <h1 className='text-3xl font-bold mt-5'>Ready to Serve</h1>
                    <div className='shadow p-10'></div>
                </div>
            </section>
        </div>
    );
};

export default OrderContainer;