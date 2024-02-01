import { describe, expect, test } from 'vitest'
import { getUserNameInitials } from './getUserInitials'

describe('Get User Name Initials', () => {
  test.each([
    {
      initial: 'GA',
      name: 'Gabriel Alves de Paiva',
    },
    {
      initial: 'AR',
      name: 'Álvaro Rodrigo',
    },
    {
      initial: 'P',
      name: 'Paiva',
    },
  ])('should return $initial for the name $name', ({ initial, name }) => {
    const result = getUserNameInitials(name)

    expect(result).toEqual(initial)
  })
})
