/* eslint-disable testing-library/prefer-screen-queries */
import React, { useEffect } from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

//Component
import { RFSelect } from '.';


describe('React Football Select Component', () => {
    it('React Football Select renders correctly', () => {
        const RFSelectProps = {
            options: ["Brasileirao", "Paulista"],
            selectedItem: jest.fn(),
        } as any;

        render(
            <Router>
                <RFSelect options={RFSelectProps.options} selectedItem={RFSelectProps.selectedItem} />
            </Router>
        )

        expect(RFSelectProps.options).toEqual(
            expect.arrayContaining(["Brasileirao"]),
            expect.arrayContaining(["Paulista"])
        )
    })
})
