import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';


//Component
import { Search } from '.';
import userEvent from '@testing-library/user-event';

describe('Search Component', () => {
    it('Search renders correctly', () => {
        const baseProps = {
            trackEvent: jest.fn(),
        }
        render(
            <Search filter={baseProps.trackEvent} />
        )
        expect(screen.getByTestId('filterInput')).toBeInTheDocument()
    })

    it('Call a filter function on click at icon', async () => {
        const baseProps = {
            trackEvent: jest.fn(),
        }
        render(
            <Search filter={baseProps.trackEvent} />
        )

        await userEvent.click(screen.getByTestId('icon'));
        expect(baseProps.trackEvent).toHaveBeenCalledTimes(1);
    })

    it('On change set a value', () => {
        const baseProps = {
            trackEvent: jest.fn(),
        }
        render(
            <Search filter={baseProps.trackEvent} />
        )

        fireEvent.change(screen.getByTestId('filterInput'), {
            target: { value: 'new value' }
        });
        expect((screen.getByTestId('filterInput'))).toHaveValue('new value')
    })

})
