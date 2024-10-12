const LinkedList = require('../src/LinkedList')

describe('LinkedList', () => {
    let list

    beforeEach(() => {
        list = new LinkedList()
    })

    test('should initialize with an empty list', () => {
        expect(list.head).toBeNull()
        expect(list.tail).toBeNull()
        expect(list.size).toBe(0)
    })

    test('should add one node to empty list', () => {
        list.append(3)
        expect(list.size).toBe(1)
        expect(list.head.value).toBe(3)
    })

    test('should add one node to list with one node', () => {
        list.append(3)
        list.append(4)
        expect(list.size).toBe(2)
        expect(list.head.value).toBe(3)
        expect(list.tail.value).toBe(4)
    })

    test('should add one node to list with two nodes', () => {
        list.append(3)
        list.append(4)
        list.append(5)
        expect(list.size).toBe(3)
        expect(list.head.value).toBe(3)
        expect(list.tail.value).toBe(5)
    })

    test('should print list values with 3 nodes', () => {
        list.append(3)
        list.append(4)
        list.append(5)

        const consoleSpy = jest.spyOn(console, 'log')

        list.print()

        expect(consoleSpy).toHaveBeenCalledWith([3, 4, 5])
    })

    test('should prepend one node to empty list', () => {
        list.prepend(3)
        expect(list.size).toBe(1)
        expect(list.head.value).toBe(3)
    })

    test('should prepend one node to list with two nodes', () => {
        list.append(3)
        list.append(4)
        list.prepend(2)
        list.print()
        expect(list.size).toBe(3)
        expect(list.head.value).toBe(2)
    })

    test('should remove node from front of empty list', () => {
        list.removeFirst()
        expect(list.size).toBe(0)
        expect(list.head).toBe(null)
        expect(list.tail).toBe(null)
    })

    test('should remove node from front of list with one node', () => {
        list.append(3)
        list.removeFirst()
        expect(list.size).toBe(0)
        expect(list.head).toBe(null)
        expect(list.tail).toBe(null)
    })

})

