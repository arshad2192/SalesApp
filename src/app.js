import React from 'react';
// import { BikeItem } from './components/BikeItem';
import { BikeList } from './components/BikeList';
import { ProductsList } from './components/ProductsList';

const app = () => {
    return (
        <div>
            <BikeList/>
            <ProductsList/>
        </div>
    );
};

export default app;