import { render, fireEvent } from '@testing-library/react'
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
    
    // Verify theme class is added to html element
    expect(document.documentElement.classList.contains('dark')).toBeTruthy()
  })
})