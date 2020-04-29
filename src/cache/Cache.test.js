import React from 'react';
import { render, toBeEmpty } from '@testing-library/react';
import cache from './RoutesChache';
import  Route from '../entities/Route';
import  RouteElement from '../entities/RouteElement';
import assert from 'assert';

const rElement = new RouteElement(47.0, 47.0, "mock name", 0);
var points = [];
points.push(rElement);
const route = new Route("testingCache", "mock description", points, [], [], new Date()); 
const route2 = new Route("testingCache2", "mock description", points, [], [], new Date()); 
const route3 = new Route("testingCache3", "mock description", points, [], [], new Date()); 

test('cache adds route correctly', () => {
    assert.equal(0, cache.routes.length);

    cache.addRouteToCache(route);
    
    assert.equal(1, cache.routes.length);
    assert.equal(route, cache.routes[0]);
});

test('cache gets the routes correctly', () => {
    cache.addRouteToCache(route);
    cache.addRouteToCache(route2);
    cache.addRouteToCache(route3);

    const routes = cache.getRoutesFromCache();

    assert.equal(routes[0], route);
    assert.equal(routes[1], route2);
    assert.equal(routes[2], route3);
});