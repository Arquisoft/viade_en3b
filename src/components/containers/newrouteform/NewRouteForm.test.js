import React from 'react';
import { render } from '@testing-library/react';
import NewRouteForm from './NewRouteForm';

test('components show correctly at start', () => {
    const { getByText, getByTestId } = render(<NewRouteForm />);
    const name = getByText('Name');
    const description = getByTestId('descr');
    const date = getByTestId('date');

    expect(name).toHaveTextContent("Name *");//with '*' its required, without it is not
    expect(description).toHaveTextContent("Description");
    expect(date).toHaveTextContent("Date *");
});
   
  