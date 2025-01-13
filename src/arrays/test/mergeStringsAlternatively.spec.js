import { mergeStringsAlternatively } from "../mergeStringsAlternately"

test('Merge Strings Alternatively', () => {
    expect(mergeStringsAlternatively('abc', 'pqr')).toBe('apbqcr')
})