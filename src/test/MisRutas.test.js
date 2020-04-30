import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MisRutas from '../components/graphic interface/MisRutas';

test('check buttons appear', () => {
    const {getByTestId} = render(<MisRutas/>);

    const mainBtn = getByTestId("routes");

    expect(mainBtn).toBeInTheDocument();

    fireEvent.click(mainBtn, 0);

    const seeRoutes = getByTestId("seeRoutes");
    const createRoutes = getByTestId("createRoutes"); 
    
    expect(seeRoutes).toBeInTheDocument(); 
    expect(createRoutes).toBeInTheDocument(); 
});