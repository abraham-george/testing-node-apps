// Testing Pure Functions

// 💣 remove this todo test (it's only here so you don't get an error about missing tests)
// test.todo('remove me')

// 🐨 import the function that we're testing
import { isPasswordAllowed } from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters

test('Valid Password', () => {
    const isPassword = isPasswordAllowed('!aBc123')
    expect(isPassword).toBe(true)
})

test('Invalid Password -> too short', () => {
    const isPassword = isPasswordAllowed('a2c!')
    expect(isPassword).toBe(false)
})

test('Invalid Password -> no alphabet characters', () => {
  const isPassword = isPasswordAllowed('123456!')
  expect(isPassword).toBe(false)
})

test('Invalid Password -> no numbers', () => {
  const isPassword = isPasswordAllowed('ABCdef!')
  expect(isPassword).toBe(false)
})

test('Invalid Password -> no uppercase letters', () => {
  const isPassword = isPasswordAllowed('abc123!')
  expect(isPassword).toBe(false)
})

test('Invalid Password -> no lowercase letters', () => {
  const isPassword = isPasswordAllowed('ABC123!')
  expect(isPassword).toBe(false)
})

test('Invalid Password -> no non-alphanumeric letters', () => {
  const isPassword = isPasswordAllowed('ABCdef123')
  expect(isPassword).toBe(false)
})

describe('Invalid Password Variations', () => {
  test.each`
    input          | expectedResult
    ${'a2c!'}      | ${false}
    ${'123456!'}   | ${false}
    ${'ABCdef!'}   | ${false}
    ${'abc123!'}   | ${false}
    ${'ABC123!'}   | ${false}
    ${'ABCdef123'} | ${false}
  `(
    'Testing various invalid password combinations',
    ({input, expectedResult}) => {
      expect(isPasswordAllowed(input)).toBe(expectedResult)
    },
  )
})
