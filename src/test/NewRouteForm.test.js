import React from 'react';
import { render } from '@testing-library/react';
import NewRouteForm from '../components/containers/newrouteform/NewRouteForm';
import { act } from 'react-dom/test-utils';

test('components show correctly at start', () => {
    let name;
    let description;
    let date;
    act(() => {
        const { getByText, getByTestId } = render(<NewRouteForm />);
        name = getByText('Name');
        description = getByTestId('descr');
        date = getByTestId('date');
    });
    
    expect(name).toHaveTextContent("Name *");//with '*' its required, without it is not
    expect(description).toHaveTextContent("Description");
    expect(date).toHaveTextContent("Date *");
});
   
  