import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('increments the count when clicked', async () => {
    const user = userEvent.setup()

    render(<Counter />)

    const button = screen.getByRole('button', {
      name: /count is 0/i,
    })

    expect(button).toBeInTheDocument()

    await user.click(button)

    expect(
      screen.getByRole('button', {
        name: /count is 1/i,
      }),
    ).toBeInTheDocument()
  })
})
