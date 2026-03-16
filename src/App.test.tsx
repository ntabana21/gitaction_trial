import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('renders the Vite logo', () => {
        render(<App />)

        // Check for the Vite logo by its alt text
        const viteLogo = screen.getByAltText('Vite logo')
        expect(viteLogo).toBeDefined()
        expect(viteLogo).toHaveAttribute('src', '/src/assets/vite.svg')
    })

    it('renders the React logo', () => {
        render(<App />)

        // Check for the React logo
        const reactLogo = screen.getByAltText('React logo')
        expect(reactLogo).toBeDefined()
    })

    it('renders the counter button', () => {
        render(<App />)

        // Check for the button with initial count
        const button = screen.getByText('Count is 0')
        expect(button).toBeDefined()
        expect(button).toHaveClass('counter')
    })

    it('renders the documentation link', () => {
        render(<App />)

        // Check for the Vite documentation link
        const viteLink = screen.getByText('Explore Vite')
        expect(viteLink).toBeDefined()
        expect(viteLink.closest('a')).toHaveAttribute('href', 'https://vite.dev/')
    })
})