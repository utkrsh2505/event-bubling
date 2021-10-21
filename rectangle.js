class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    area(){
        console.log(this.height*this.width)
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}

let rect = new Rectangle(5,10);
rect.area();
let sqr = new Square(5);
sqr.area();

