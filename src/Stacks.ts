// Se crea la clase que le da formato al nodo, ademas con formato generico
class NodeStack<T> {
  data: T
  next: NodeStack <T>| null
  constructor(data: T, next: NodeStack<T>) {
      this.data = data
      this.next = next
  }
}
// Creamos la clase que tendra el stack
class Stack<T>{
  top: NodeStack<T> | null
  constructor() {
      this.top = null 
  }
  // Creamos el metodo push que agregara valores al stack
  push(value: T) {
      let node = new NodeStack(value, this.top)
      this.top = node
  }
    // Creamos el metodo pop que sacara los valores al stack
  pop(): T | null {
    if (this.top !== null) {
          let value = this.top.data
        this.top = this.top.next
        return value
    } else {
        console.log("Stack empty")
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