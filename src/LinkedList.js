const Node = require('./Node.js')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

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

    addFront(value) {
        const newNode = new Node(value)

        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.size++
    }

    removeFront() {
        if (this.head) {
            this.head = this.head.next
            this.size--
        }

        if (this.size === 0) {
            this.head = null
            this.tail = null
        }
    }

    print() {
        let current = this.head
        // Create an empty list to store the node values
        let nodeValues = []

        while (current) {
            nodeValues.push(current.value)
            current = current.next
        }

        console.log(nodeValues)
    }
}

module.exports = LinkedList

