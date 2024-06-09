var NodeStack = /** @class */ (function () {
    function NodeStack(data, next) {
        this.data = data;
        this.next = next;
    }
    return NodeStack;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
    }
    Stack.prototype.push = function (element) {
        var node = new NodeStack(element, this.top);
        this.top = node;
    };
    Stack.prototype.pop = function () {
        if (this.top !== null) {
            var element = this.top.data;
            this.top = this.top.next;
            return element;
        }
        else {
            console.log("Stack is empty");
            return null;
        }
    };
    return Stack;
}());
var stack = new Stack();
stack.push(10);
stack.push("Hola");
stack.push(30);
stack.push("Bucaros");
stack.push(50);
console.log(JSON.stringify(stack.top));
console.log("************");
stack.pop();
console.log(JSON.stringify(stack.top));
console.log("************");
stack.pop();
console.log(JSON.stringify(stack.top));
console.log("************");
stack.pop();
console.log(JSON.stringify(stack.top));
console.log("************");
stack.pop();
console.log(JSON.stringify(stack.top));
console.log("************");
