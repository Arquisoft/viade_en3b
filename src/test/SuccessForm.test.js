import React from 'react';
import { render } from '@testing-library/react';
import SuccessForm from '../components/containers/stepper/success/SuccessForm';

test('components show properly', () => {
    const { getByTestId } = render(<SuccessForm />);
    const icon = getByTestId('icon');
    const msg1 = getByTestId('textCreated');
    const msg2 = getByTestId('textSuccessful');
    const download = getByTestId('download');

    expect(icon).toBeInTheDocument();
    expect(msg1).toBeInTheDocument();
    expect(msg2).toBeInTheDocument();
    expect(download).toBeInTheDocument();
});
