/*
-class là cú pháp rõ ràng nhát để nhận biết cách khai báo một đối tượng
-js ngôn ngữ lập trình hướng đối tượng trước khi có ES6 không có cú pháp class nên sử dụng prototypes
-prototypes là cơ chế mà các đối tượng JS kế thừa các chức năng từ nhau
-mối đối tượng tạo ra từ hàm tạo đều có một prototype mặc định->prototype của hàm tạo đó
-Mọi đối tượng trong JS đều có các thuộc tính, phương thức được tích hợp săn gọi là prototyp
-Bản thân protoype cũng là một đối tượng, vì vậy prototype sẽ có prototype riêng, tạo nên một chuỗi
prototpe, chuỗi này chỉ kết thúc khi prototype bằng null
-Prototypes định nghĩa các thuộc tính và phương thức mà mỗi đối tượng được tạo ra từ hàm tạo đó có thể truy cập được
-Khi một đối tượng được tạo ra, nó sẽ kế thừa tất cả các thuộc tính và phương thức từ prototype của hàm tạo.

prototype sinh ra cho mục đích kế thừa như trong lập trình hướng đối tượng.
Việc sử dụng prototype trong JavaScript cho phép ta thêm các thuộc tính và phương thức vào các đối tượng
trong một cách hiệu quả hơn.
Thay vì tạo các phương thức và thuộc tính cho từng đối tượng,
ta có thể thêm chúng vào prototype của hàm tạo,
do đó tất cả các đối tượng được tạo ra từ hàm tạo đó đều có thể truy cập đến chúng.
*/

const myObject = {
  name: "Ngoc Huyen",
  greet() {
    console.log(`Hello world ${this.name}`);
  },
};

myObject.greet();
/*
greet() là một phương thức của myObject, do đó nó có thể gọi phương thức đó
ngoài greet() ra thì myObject là một object nên nó kế thừa lại toàn bộ prototype của Object
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
name
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
myObject có quyền truy cập vào các prototype này
ví dụ: myObject.toString()

Khi cố gắng truy cập một thuộc tính của một đối tượng,
nếu không thể tìm thấy thuộc tính trong chính đối tượng đó,
nó sẽ chuyển sang tìm kiếm trong prototype của đối tượng cha.
Cứ thế cho đến khi tìm thấy thuộc tính hoặc kết thúc chuỗi kế thừa mà trả về giá trị undefined.
*/

//prototypes
// Khai báo lớp Geometry
function Geometry() {}

// Phương thức tính chu vi
Geometry.prototype.calculatePerimeter = function () {
  return;
};

// Phương thức tính diện tích
Geometry.prototype.calculateArea = function () {
  return;
};

// Khai báo lớp Square kế thừa từ Geometry
function Square(sideLength) {
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Geometry.prototype);
Square.prototype.constructor = Square;

// Override phương thức tính chu vi cho Square
Square.prototype.calculatePerimeter = function () {
  return this.sideLength * 4;
};

// Override phương thức tính diện tích cho Square
Square.prototype.calculateArea = function () {
  return this.sideLength * this.sideLength;
};

// Khai báo lớp Circle kế thừa từ Geometry
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Geometry.prototype);
Circle.prototype.constructor = Circle;

// Override phương thức tính chu vi cho Circle
Circle.prototype.calculatePerimeter = function () {
  return 2 * Math.PI * this.radius;
};

// Override phương thức tính diện tích cho Circle
Circle.prototype.calculateArea = function () {
  return Math.PI * this.radius * this.radius;
};

//class
// Khai báo lớp Geometry
class Geometry {
  calculatePerimeter() {
    return;
  }

  calculateArea() {
    return;
  }
}

// Khai báo lớp Square kế thừa từ Geometry
class Square extends Geometry {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  calculatePerimeter() {
    return this.sideLength * 4;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

const a = new Square(10);
console.log(a.calculatePerimeter());

// Khai báo lớp Circle kế thừa từ Geometry
class Circle extends Geometry {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
