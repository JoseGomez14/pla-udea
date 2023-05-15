/* eslint-disable no-undef */
import React from 'react'
import { useRouter } from 'next/router'
import { render, fireEvent, screen } from '@testing-library/react'
import CreateUnit from './../../../pages/create-unit/index'


jest.mock('next/router')

test('adds a subunit when clicking the add button', () => {
  const mockRouter = {
    push: jest.fn()
  }
  useRouter.mockReturnValue(mockRouter)

  render(<CreateUnit />)

  // simulate adding a subunit
  const addButton = screen.getByLabelText('Agregar subunidad')
  fireEvent.click(addButton)

  // assert that a new subunit is added
  const subunitCard = screen.getByText('Nueva subunidad')
  expect(subunitCard).toBeInTheDocument()
})
