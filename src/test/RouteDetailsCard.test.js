import React from 'react';
import { render, } from '@testing-library/react';
import Route from '../entities/Route';
import RouteElement from '../entities/RouteElement';
import RouteDetails from '../components/graphic interface/RouteDetailsCard';

test('test details show correctly', () => {

    const rElement = new RouteElement(47.0, 47.0, 0);

    var points = [];
    points.push(rElement);

    const myroute = new Route("mockRoute", "mock description", points, [], [], new Date()); 
    const {getByTestId} = render(<RouteDetails route= {myroute}/>);

    const name = getByTestId("name");
    const date = getByTestId("date");
    const distance = getByTestId("dtc");

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    
});

test('test details text show correctly', () => {

    const rElement = new RouteElement(47.0, 47.0, 0);

    var points = [];
    points.push(rElement);

    const myroute = new Route("mockRoute", "mock description", points, [], [], new Date()); 
    const {getByText} = render(<RouteDetails route= {myroute}/>);

    const name = getByText("mockRoute");
    const date = getByText("Date: " + new Date().toDateString());
    const distance = getByText("Distance: 0 Km");

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    
});
