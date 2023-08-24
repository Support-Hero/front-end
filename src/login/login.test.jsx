import "@testing-library/jest-dom"
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Login from './login'
import Welcome from './welcome'
describe("test:login form",()=>{

    test('login test',async() => {
        render(<Login />)
        render(<Welcome />)
        const titleElement = screen.getByRole('heading')
        expect(titleElement).toBeInTheDocument()

        const emailInput = screen.getByLabelText('Email address');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button');

        fireEvent.change(emailInput, { target: { value: 'kminchelle' } });
        fireEvent.change(passwordInput, { target: { value: '0lelplR' } });
        fireEvent.click(submitButton);

        expect(emailInput.value).toBe('kminchelle');
        expect(passwordInput.value).toBe('0lelplR');

        await waitFor(() => {
            const profilePageHeading = screen.getByText('welcome');
            expect(profilePageHeading).toBeInTheDocument();
        });
})
})