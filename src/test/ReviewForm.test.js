import React from 'react';
import { render, } from '@testing-library/react';
import ReviewForm from '../components/containers/stepper/reviewform/ReviewForm';
import RouteElement from '../entities/RouteElement';

const rElement = new RouteElement(47.0, 47.0, 0);
let pts = [];
pts.push(rElement);
const vals = { step: 2, name: "routeName", description: "routeDescription", date: new Date(), photos: [], videos: [], points: pts};

test('components show correctly', () => {
    const { getByTestId } = render(<ReviewForm values={vals}/>);
    const name = getByTestId('name');
    const description = getByTestId('description');
    const date = getByTestId('date');
    const trackPoints = getByTestId('trackPoints');

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(trackPoints).toBeInTheDocument();
});