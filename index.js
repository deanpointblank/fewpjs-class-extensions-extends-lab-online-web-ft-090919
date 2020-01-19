// Your code here
class Polygon{
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((sum, side) => {return sum + side}, 0)
    }

}

class Triangle extends Polygon{

    get isValid(){
        if (this.countSides === 3){
            const [x, y, z] = this.sides
            return x + y > z && x + z > y && y + z > x
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.countSides === 4){
            const [x, y, z, a] = this.sides
            return x === y && y === z && z === a
        } else {
            return false
        }
    }

    get area(){
        return this.sides[0] ** 2
    }
}