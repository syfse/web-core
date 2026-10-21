import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PrimaryButton } from '../button/Button'
import { Card, CardBody, CardFooter, CardHeader, CardSubfooter } from './Card'

describe('Card components', () => {
  it('renders its named content sections and action area', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Content</CardBody>
        <CardFooter>Footer text</CardFooter>
        <CardSubfooter>
          <PrimaryButton>Action</PrimaryButton>
        </CardSubfooter>
      </Card>,
    )

    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText('Title').closest('.card__header')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Footer text').closest('.card__footer')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })
})
