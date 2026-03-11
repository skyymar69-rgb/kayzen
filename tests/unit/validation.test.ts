import { isValidEmail, isValidUrl, isValidPassword } from '../../src/utils/validation'

describe('Validation Utils', () => {
  describe('isValidEmail', () => {
    it('should validate correct emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
    })

    it('should reject invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false)
    })
  })

  describe('isValidUrl', () => {
    it('should validate correct URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true)
    })

    it('should reject invalid URLs', () => {
      expect(isValidUrl('not-a-url')).toBe(false)
    })
  })

  describe('isValidPassword', () => {
    it('should validate passwords with 8+ characters', () => {
      expect(isValidPassword('password123')).toBe(true)
    })

    it('should reject short passwords', () => {
      expect(isValidPassword('short')).toBe(false)
    })
  })
})
