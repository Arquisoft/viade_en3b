import React from 'react';
import RouteElement from './RouteElement';
import assert from 'assert';

test('points are created correctly',() => {
    const rElement = new RouteElement(47.0, 47.0, "mock name", 0);

    assert.equal(rElement.getLongitude(), 47.0);
    assert.equal(rElement.getLatitude(), 47.0);
    assert.equal(rElement.getName(), "mock name");
    assert.equal(rElement.getElevation(), 0);

});