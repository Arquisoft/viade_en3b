import React from 'react';
import Route from './Route';
import RouteElement from './RouteElement';
import Comment from './Comment';
import assert from 'assert';

test('route is created correctly', () =>{
    const rElement = new RouteElement(47.0, 47.0, "mock name", 0);
    const comment1 = new Comment("This route is great");
    const comment2 = new Comment("This route is horrible");

    //check comments are correct
    assert.equal(comment1.text, "This route is great");
    assert.equal(comment2.text, "This route is horrible");

    var points = [];
    points.push(rElement);
    var comments = [];
    comments.push(comment1);
    comments.push(comment2);

    const route = new Route("mockRoute", "mock description", points, comments, [], new Date()); 

    assert.equal(route.getName(), "mockRoute");
    assert.equal(route.getDescription(), "mock description");
    assert.equal(route.getRouteElements().length, 1);
    assert.equal(route.getRouteElements()[0], rElement);
    assert.equal(route.getComments().length, 2);
    assert.equal(route.getComments()[0], comment1);
    assert.equal(route.getComments()[1], comment2);
    assert.equal(route.getTotalDistance(), 0);

    
}); 