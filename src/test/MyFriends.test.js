import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyFriends from '../components/graphic interface/MyFriends';

test('check buttons appear', () => {
    const {getByTestId} = render(<MyFriends/>);

    const mainBtn = getByTestId("btn");

    expect(mainBtn).toBeInTheDocument();

    fireEvent.click(mainBtn, 0);

    const seeFriends = getByTestId("btnSee");
    const createGroups = getByTestId("btnGrp"); 
    
    expect(seeFriends).toBeInTheDocument(); 
    expect(createGroups).toBeInTheDocument(); 
});