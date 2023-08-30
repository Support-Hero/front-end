import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Welcome from '../welcome'
import { BrowserRouter } from "react-router-dom";

describe("welcome component", () => {
    it("should render welcome page",  () => {
        render(<BrowserRouter>
                <Welcome />
        </BrowserRouter>
        );
        expect(screen.getByText('Welcome,')).toBeInTheDocument();
        const clientLinks = screen.getAllByText('View');
        expect(clientLinks).toHaveLength(3); 

    })
}
)