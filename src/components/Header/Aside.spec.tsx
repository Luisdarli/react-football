/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

//Component
import { Header } from '.';

describe('Header Component', () => {
    it('Header renders correctly', () => {
        render(
            <Router>
                <Header />
            </Router>
        )

        expect(screen.getByText('React')).toBeInTheDocument()
    })
})
