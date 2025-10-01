import { BookmarkCheck, CookingPot, ScrollText } from 'lucide-react';
import React from 'react';

const States = () => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className="border-4 border-dotted border-amber-400 rounded-2xl border-primary p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <ScrollText className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Current Orders
                        <h2 className="text-6xl font-bold">{0}</h2>
                    </div>
                </div>
            </div>
            <div className="border-4 border-dotted border-amber-400 rounded-2xl border-primary p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <CookingPot className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Currently Cooking
                        <h2 className="text-6xl font-bold">{0}</h2>
                    </div>
                </div>
            </div>
            <div className="border-4 border-dotted border-amber-400 rounded-2xl border-primary p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <BookmarkCheck className="animate-pulse" color="#fcb700" size={100} />
                    <div className="text-xl text-center">
                        Ready to Serve
                        <h2 className="text-6xl font-bold">{0}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;