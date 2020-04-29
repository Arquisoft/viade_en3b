import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../components/containers/welcome/Welcome';
import { ExpansionPanelActions } from '@material-ui/core';

test('welcome displays correctly', () => {
    const { getByTestId } = render(<Welcome />);
    const logo = getByTestId("logo");
    const welcome = getByTestId("welcome");
    const routes = getByTestId("routes");

    expect(logo).toBeInTheDocument();
    expect(welcome).toBeInTheDocument();
    expect(routes).toBeInTheDocument();
} );