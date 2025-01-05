import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeToggle from '../ui/ThemeToggle'
import { ThemeProvider } from '@/context/ThemeContext'

describe('ThemeToggle', () => {
  it('should toggle theme when clicked', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = getByRole('button')
    fireEvent.click(button)
    
    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
  })
})