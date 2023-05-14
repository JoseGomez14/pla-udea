/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { PlusIcon, TrashIcon, CheckIcon, ArrowIcon, EditIcon, XIcon, SearchIcon, LogoutIcon, UdeaIcon } from './../../components/Icons'

describe('Pruebas a componente Icons', () => {
  // Arrange
  const props = {
    width: '20px',
    height: '20px',
    color: 'red',
    fill: 'red'
  }
  const testIds = {
    plusIcon: 'plus-icon',
    trashIcon: 'trash-icon',
    checkIcon: 'check-icon',
    arrowIcon: 'arrow-icon',
    editIcon: 'edit-icon',
    xIcon: 'x-icon',
    searchIcon: 'search-icon',
    logoutIcon: 'logout-icon',
    udeaIcon: 'udea-icon'
  }

  test('Debe renderizar plus-icon correctamente', () => {
    // Act
    render(<PlusIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.plusIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar trash-icon correctamente', () => {
    // Act
    render(<TrashIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.trashIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar check-icon correctamente', () => {
    // Act
    render(<CheckIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.checkIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar arrow-icon correctamente', () => {
    // Act
    render(<ArrowIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.arrowIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar edit-icon correctamente', () => {
    // Act
    render(<EditIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.editIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar x-icon correctamente', () => {
    // Act
    render(<XIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.xIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar search-icon correctamente', () => {
    // Act
    render(<SearchIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.searchIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar logout-icon correctamente', () => {
    // Act
    render(<LogoutIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.logoutIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })

  test('Debe renderizar udea-icon correctamente', () => {
    // Act
    render(<UdeaIcon { ...props }/>)
    const icon = screen.getByTestId(testIds.udeaIcon)
    // Assert
    expect(icon).toBeInTheDocument()
  })
})
