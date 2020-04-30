import React from 'react';
import { render } from '@testing-library/react';
import FriendsCard from '../components/graphic interface/FriendsCard';

test('components show properly', () => {
    const {getByTestId} = render(<FriendsCard />);
    
    const title= getByTestId('title');
    const btn = getByTestId('add');

    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
});