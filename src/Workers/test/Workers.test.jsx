import React from "react";
import "@testing-library/jest-dom";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter } from "react-router-dom";
import Workers from "../Workers"; // Adjust the path accordingly
import { afterEach, describe, expect, it, vi } from 'vitest'
import { api } from '../../api'

describe("Workers Component", () => {
    // Setup Mock Service Worker
    const server = setupServer(
        rest.get(api+"/users", (req, res, ctx) => {
            return res(
                ctx.json([
                    // Provide sample worker data here
                    // Adjust this data based on your actual API response
                    { _id: "1", firstName: "John", lastName: "Doe", email: "john@example.com", phoneNumber: "1234567890" },
                    // More worker data...
                ])
            );
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("renders workers data and interacts with components", async () => {
        render(
            <BrowserRouter>
                <Workers />
            </BrowserRouter>
        );

        // Wait for the initial data to be loaded
        await waitFor(() => screen.getByText("John Doe"));

        // Verify that the worker's data is displayed
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("john@example.com")).toBeInTheDocument();
        expect(screen.getByText("1234567890")).toBeInTheDocument();

        // Test interaction (example: clicking the Update button)
        const updateButton = screen.getByText("Update");
        fireEvent.click(updateButton);
        // Verify that the modal or update component is opened
        expect(screen.getByLabelText("Update Worker")).toBeInTheDocument();

        const createButton = screen.getByText("+ Add New Workers");
        fireEvent.click(createButton);
        expect(screen.getByLabelText("Add Worker")).toBeInTheDocument();
        
        const deleteButton = screen.getByText("x");
        fireEvent.click(deleteButton);
        expect(screen.getByLabelText("Delete")).toBeInTheDocument();
    })
});

