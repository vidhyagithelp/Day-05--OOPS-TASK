class Circle{
    color;
    radius;
     constructor(color,radius){
        this.color=color;
        this.radius=radius;
                           }
getRadius(){
return this.radius;
}
setRadius(rad){
this.radius=rad;
}
getColor(){
return this.color;
}
setColor(colr){
this.color=colr;
}
getArea(){
return `${3.14*(this.radius*this.radius)}`;
}
getCircum(){
return `${2*3.14*this.radius}`;
}
}

let shape=new Circle("red",10);
console.log(shape.color);
console.log(shape.radius);
console.log(shape.getArea());
console.log(shape.getCircum());
