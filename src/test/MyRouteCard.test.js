import React from 'react';
import { render, } from '@testing-library/react';
import Route from '../entities/Route';
import RouteElement from '../entities/RouteElement';
import MyRouteCard from '../components/graphic interface/MyRouteCard';
import assert from 'assert';

test('test card shows correctly', () => {

    const rElement = new RouteElement(47.0, 47.0, 0);

    var points = [];
    points.push(rElement);

    const myroute = new Route("mockRoute", "mock description", points, [], [], new Date()); 
    const {getByTestId} = render(<MyRouteCard route= {myroute}/>);

    const name = getByTestId("name");
    const date = getByTestId("date");
    const distance = getByTestId("dtc");
    const button = getByTestId("btn");

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(button).toBeInTheDocument();

});

test('test card shows correct values', () => {

    const rElement = new RouteElement(47.0, 47.0, 0);

    var points = [];
    points.push(rElement);

    const route = new Route("mockRoute", "mock description", points, [], [], new Date()); 
    const {getByText} = render(<MyRouteCard route={route}/>)

    const name = getByText("mockRoute");
    const date = getByText(new Date().toDateString());
    const distance = getByText("0 Km");
    const button = getByText("Details");

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(button).toBeInTheDocument();

});