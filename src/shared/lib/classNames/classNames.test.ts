import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClasses')).toBe('someClasses')
	})

	test('with additional lasses', () => {
		expect(classNames('someClasses', {}, ['class1', 'class2'])).toBe(
			'someClasses class1 class2'
		)
	})

	test('with mods', () => {
		expect(
			classNames('someClasses', { firstKey: true, secondKey: false })
		).toBe('someClasses firstKey')
	})

	test('with all params', () => {
		expect(
			classNames('someClasses', { firstKey: true, secondKey: false }, [
				'class1',
				'class2',
			])
		).toBe('someClasses class1 class2 firstKey')
	})
})
