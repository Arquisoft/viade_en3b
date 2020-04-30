import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MediaTabBar from '../components/graphic interface/MediaTabBar';
import Route from '../entities/Route';
import RouteElement from '../entities/RouteElement';

test('check elements appear', () => {
    const rElement = new RouteElement(47.0, 47.0, 0);
    var points = [];
    points.push(rElement);

    const myroute = new Route("mockRoute", "mock description", points, [], [], new Date())

    const {getByTestId} = render(<MediaTabBar route={myroute}/>);

    const comments = getByTestId("comms");
    const media = getByTestId("media"); 
    
    expect(comments).toBeInTheDocument(); 
    expect(media).toBeInTheDocument(); 
});