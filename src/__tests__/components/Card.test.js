/* eslint-disable no-undef */
import React from 'react'
import Card from './../../components/Card'
import { render, screen } from '@testing-library/react'

afterAll(() => {
  jest.clearAllMocks()
})

describe('Pruebas al componente Card', () => {
  // Arrange
  const valoresIniciales = {
    id: 'mi-id',
    content: 'Titulo de tarjeta',
    subContent: 'Subtitulo de tarjeta',
    handleAddCard: jest.fn(),
    handleDeleteCard: jest.fn()
  }
  const testIdAdd = 'add-card-button'

  test('Renderiza el componente', () => {
    // Act
    render(
      <Card
        {...valoresIniciales}
      />
    )
    const addButtonElement = screen.getByTestId(testIdAdd)
    // Assert
    expect(addButtonElement).toBeInTheDocument()
  })

  // test('Debe renderizar el componente correctamente con add button', () => {
  //   const handleDeleteCard = jest.fn()

  //   render(
  //     <Card
  //       id={id}
  //       content={content}
  //       subContent={subContent}
  //       handleDeleteCard={handleDeleteCard}
  //     />
  //   )

  //   const titleElement = screen.getByText(content)
  //   const subTitleElement = screen.getByText(subContent)
  //   const addButtonElement = screen.queryByTitle(/Agregar/)
  //   const deleteButtonElement = screen.getByTitle(/Eliminar/)

  //   expect(titleElement).toBeInTheDocument()
  //   expect(subTitleElement).toBeInTheDocument()
  //   expect(addButtonElement).not.toBeInTheDocument()
  //   expect(deleteButtonElement).toBeInTheDocument()
  //   expect(handleDeleteCard).toHaveBeenCalledTimes(0)
  // })

  // it('calls handleAddCard when add button is clicked', () => {
  //   const handleAddCard = jest.fn()
  //   const handleDeleteCard = jest.fn()
  //   const cardType = 'mi-tipo-de-tarjeta'

  //   render(
  //     <Card
  //       id={id}
  //       content={content}
  //       subContent={subContent}
  //       handleAddCard={handleAddCard}
  //       handleDeleteCard={handleDeleteCard}
  //       cardType={cardType}
  //     />
  //   )

  //   const addButton = screen.getByTestId('add-card-button')
  //   addButton.click()

  //   expect(handleAddCard).toHaveBeenCalledTimes(1)
  //   expect(handleDeleteCard).toHaveBeenCalledTimes(0)
  // })

  // it('calls handleDeleteCard when delete button is clicked', () => {
  //   const handleAddCard = jest.fn()
  //   const handleDeleteCard = jest.fn()

  //   render(
  //     <Card
  //       id={id}
  //       content={content}
  //       subContent={subContent}
  //       handleAddCard={handleAddCard}
  //       handleDeleteCard={handleDeleteCard}
  //     />
  //   )

  //   const deleteButton = screen.getByTestId('delete-card-button')
  //   deleteButton.click()

  //   expect(handleAddCard).toHaveBeenCalledTimes(0)
  //   expect(handleDeleteCard).toHaveBeenCalledTimes(1)
  // })
})
