const Node = require('./Node.js')

/**
 * LinkedList class represents a singly linked list with methods for
 * appending, prepending, and removing nodes.
 */
class LinkedList {

    /**
     * Constructs an empty LinkedList.
     * Initializes the head, tail, and size properties.
     */
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    /**
     * Adds a new node with the given value to the end of the list.
     * If the list is empty, the new node becomes both the head and the tail.
     * Otherwise, the new node is added after the current tail.
     * @param {any} value - The value to be added to the list.
     * @returns {LinkedList} The updated LinkedList instance.
     */
    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
        return this
    }

    /**
     * Adds a new node with the given value to the beginning of the list.
     * If the list is empty, the new node becomes both the head and the tail.
     * Otherwise, the new node is inserted before the current head.
     * @param {any} value - The value to be added to the front of the list.
     * @returns {LinkedList} The updated LinkedList instance.
     */
    prepend(value) {
        const newNode = new Node(value)

        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.size++

        return this
    }

    /**
     * Removes the last node from the list.
     * If the list is empty, it returns undefined.
     * If the list becomes empty after the removal, both the head and the tail are set to null.
     * @returns {Node|undefined} The removed node or undefined if the list was empty.
     */
    removeLast() {
        if (!this.head) {
            return undefined
        }
        let temp = this.head
        let pre = this.head
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
      
        this.tail = pre
        this.tail.next = null
        this.size--

        if (this.size === 0) {
            this.head = null
            this.tail = null
        }

        return temp
    }

    /**
     * Removes the first node from the list.
     * If the list is empty, it returns undefined.
     * If the list becomes empty after the removal, the tail is also set to null.
     * @returns {Node|undefined} The removed node or undefined if the list was empty.
     */
    removeFirst() {

        if (this.size === 0) {
            return undefined
        } 

        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.size--

        if (this.size === 0) {
            this.tail = null
        }
    }

    /**
     * Prints all the values of the nodes in the list.
     * Traverses the list from head to tail and logs an array of node values.
     */
    print() {
        let current = this.head
        let nodeValues = []

        while (current) {
            nodeValues.push(current.value)
            current = current.next
        }

        console.log(nodeValues)
    }
}

module.exports = LinkedList

