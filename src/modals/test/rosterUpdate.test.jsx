import '@testing-library/jest-dom'; // For custom matchers
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect, test, vi } from "vitest";
import RosterUpdate from '../rosterUpdate';
import { BrowserRouter } from 'react-router-dom';
import { api } from '../../api'

describe("roster update component", () => {
    // Mock the API requests using MSW
    const server = setupServer(
        rest.put(api + '/rosters/', (req, res, ctx) => {
            return res(ctx.json({ id: 1, ...req.body }));
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => {
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should update shift modal rendered', async () => {
        const setWorkerName = vi.fn((name) => name)
        const setDate = vi.fn((date) => date)
        const setOpen = vi.fn(() => false)
        render(<BrowserRouter>
            <RosterUpdate
                setOpen={setOpen}
                setWorkerName={setWorkerName}
                setDate={setDate}
                 />
        </BrowserRouter>);
        // Mock user input
        const workernameInput = screen.getByLabelText('worker name:');
        const dateInput = screen.getByLabelText('Select Date');
        const shiftStartInput = screen.getByLabelText('Shift Start');
        const shiftEndInput = screen.getByLabelText('Shift End');
        const breakStartInput = screen.getByLabelText('Break Start');
        const breakEndInput = screen.getByLabelText('Break End');

        fireEvent.change(workernameInput, { target: { value: 'John' } });
        fireEvent.change(dateInput, { target: { value: '2022-09-01' } });

        expect(workernameInput.value).toBe("John");
        expect(dateInput.value).toBe("2022-09-01");
        // // // Mock API response
        // server.use(
        //     rest.post('/clients/', (req, res, ctx) => {
        //         return res(ctx.status(200),
        //             ctx.json(ctx.json({
        //                 id: 1, firstName: "John", lastName: "Doe",
        //                 phoneNumber: "1234567890", address: "123 Main St"
        //             })));
        //     })
        // );

        // fireEvent.click(saveButton);

        // // Wait for the API request to resolve
        // await screen.findByText('Close'); 

        // // Check if the API request was made
        // expect(screen.queryByText('Close')).toBeInTheDocument();
    });
})