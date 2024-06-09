class NodeStack<T> {
  data: T
  next: NodeStack <T>| null
  constructor(data: T, next: NodeStack<T>) {
      this.data = data
      this.next = next
  }
}

class Stack<T>{
  top: NodeStack<T> | null
  constructor() {
      this.top = null 
  }
  push(element: T) {
      let node = new NodeStack(element, this.top)
      this.top = node
  }
  pop(): T | null {
    if (this.top !== null) {
          let element = this.top.data
        this.top = this.top.next
        return element
    } else {
        console.log("Stack is empty")
        return null;
    }
}
}
const stack = new Stack()
stack.push(10) 
stack.push("Hola") 
stack.push(30) 
stack.push("Bucaros") 
stack.push(50) 
console.log(JSON.stringify(stack.top))
console.log("************")
stack.pop() 
console.log(JSON.stringify(stack.top))
console.log("************")
stack.pop() 
console.log(JSON.stringify(stack.top))
console.log("************")
stack.pop() 
console.log(JSON.stringify(stack.top))
console.log("************")
stack.pop() 
console.log(JSON.stringify(stack.top))
console.log("************")