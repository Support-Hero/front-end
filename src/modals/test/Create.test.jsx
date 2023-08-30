import '@testing-library/jest-dom'; // For custom matchers
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect, test, vi } from "vitest";
import Create from '../Create';
import { BrowserRouter } from 'react-router-dom';
import { api } from '../../api'

describe("login component", () => {
    // Mock the API requests using MSW
    const server = setupServer(
        rest.post(api + '/clients/', (req, res, ctx) => {
            return res(ctx.json({ id: 1, firstName: "John", lastName: "Doe", phoneNumber: "1234567890", address: "123 Main St" }));
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => {
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should add a new client when form is submitted', async () => {
        render(<BrowserRouter><Create /></BrowserRouter>);

        // Mock user input
        const firstNameInput = screen.getByLabelText('first name');
        const lastNameInput = screen.getByLabelText('last name');
        const phoneNumberInput = screen.getByLabelText('phone number');
        const addressInput = screen.getByLabelText('address');
        const saveButton = screen.getByText('Save');

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });

        // Mock API response
        server.use(
            rest.post('/clients/', (req, res, ctx) => {
                return res(ctx.status(200),
                    ctx.json(ctx.json({
                        id: 1, firstName: "John", lastName: "Doe",
                        phoneNumber: "1234567890", address: "123 Main St"
                    })));
            })
        );

        fireEvent.click(saveButton);

        // Wait for the API request to resolve
        await screen.findByText('Close'); // Assuming "Close" button appears after API response

        // Check if the API request was made
        expect(screen.queryByText('Close')).toBeInTheDocument();
    });
})