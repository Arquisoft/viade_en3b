import React from 'react';
import { render, } from '@testing-library/react';
import ListUserRoutes from '../components/graphic interface/ListUserRoutes';
import assert from 'assert';
import RouteElement from '../entities/RouteElement';
import Comment from '../entities/Comment';
import Route from '../entities/Route';
import cache from '../cache/RoutesChache';

test('routes are listed correctly', () =>{
    const rElement = new RouteElement(47.0, 47.0, 0); 
    const comment1 = new Comment("This route is great");
    const comment2 = new Comment("This route is horrible");
    var points = [];
    points.push(rElement);
    var comments = [];
    comments.push(comment1);
    comments.push(comment2);

    const route = new Route("mockRoute", "mock description", points, comments, [], new Date()); 
    const route2 = new Route("mockRoute2", "mock description2", points, comments, [], new Date()); 
    const route3 = new Route("mockRoute3", "mock description3", points, comments, [], new Date()); 
    
    cache.addRouteToCache(route);
    cache.addRouteToCache(route2);
    cache.addRouteToCache(route3);

    const userRoutes = new ListUserRoutes();

    assert.equal(userRoutes.state.routes.length == 3, true);
    
}); 