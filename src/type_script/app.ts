abstract class Shape {
    abstract perimeter():number
    abstract area():number
}

class Triangle extends Shape{
    constructor(private a:number, private b:number,private c:number) {
        super();
this.a=a
this.b=b
this.c=c
    }

    area(): number {
        let p = (this.a+this.b+this.c)/2
        return +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(2);
    }
    perimeter(): number {
        return this.a+ this.b+this.c;
    }
}

let triangleArea = new Triangle(2,4,5)
let trianglePerimeter = new Triangle(2,4,5)
let returnedTriangleArea = triangleArea.area();
let returnedTrianglePerimeter = triangleArea.perimeter();

// console.log(returnedTriangleArea);
// console.log(returnedTrianglePerimeter);




class Rectangle extends Shape{
    a:number
    b:number
    constructor( a:number,  b:number) {
        super();
        this.a=a
        this.b=b
    }

    area(): number {
        return this.a*this.b;
    }
    perimeter(): number {
        return 2*(this.a+this.b);
    }

}
let rectangleArea = new Rectangle(5,13)
let rectanglePerimeter = new Rectangle(2,8)
let newRectangleArea = rectangleArea.area();
let newRectanglePerimeter = rectanglePerimeter.perimeter();
// console.log(newRectangleArea)
// console.log(newRectanglePerimeter)


let figures = [returnedTriangleArea,returnedTrianglePerimeter,newRectangleArea,newRectanglePerimeter]
figures.forEach( value => console.log(value))
