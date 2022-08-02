/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'

//Component
import { Aside } from '.';

describe('Aside Component', () => {
    it('Aside renders correctly', () => {
        render(
            <Router>
                <Aside />
            </Router>
        )

        expect(screen.getByText('Home')).toBeInTheDocument()
    })

    it('Click the Home button, Go to the home page', async () => {
        render(
            <Router>
                <Aside />
            </Router>
        )
        const history = createMemoryHistory()

        await userEvent.click(screen.getByText('Home'));
        expect(history.location.pathname).toBe("/")
    })
})
