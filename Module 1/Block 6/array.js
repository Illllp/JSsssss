var array1 = [1, 2, 3]
var array2 = [5, 'Hello', 6]

Array.prototype.doubling = function() {
    var newArray = this.map(function(item){
        if (typeof item === 'number') {
            return Math.pow(item, 2)
        }

        if (typeof item === 'string') {
            return item += item
        }
    })
    return newArray
}

var newA = array1.doubling()
var newB = array2.doubling()

console.log('A', newA)
console.log('B', newB)