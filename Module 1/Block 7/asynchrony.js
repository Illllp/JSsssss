/*
Реализуйте класс MyPromise, который будет работать точно так же, как и Promise.
Достаточно реализовать методы: then, catch, finally
Методы all, race делать не нужно

Решил не самостоятельно
*/





class MyPromise {
    constructor(callback){
        this.onCatch = null
        this.onFinally = null
        this.thenCbs = []
        this.isRejected = false

        function resolver(data) {
            if (this.isRejected) {
                return 
            }
            this.thenCbs.forEach(cd => {
                data = cd(data)
            })

            if (this.onFinally) {
                this.onFinally()
            }
        }

        function reject(error) {
            this.isRejected = true
            if (this.onCatch) {
                this.onCatch(error)
            }

            if (this.onFinally) {
                this.onFinally()
            }
        }
        callback(resolver.bind(this), reject.bind(this))
    }

    then(cd) {
        this.thenCbs.push(cd)
        return this
    }

    catch(cd) {
        this.onCatch = cd
        return this
    }

    finally(cd) {
        this.onFinally = cd
        return this
    }

    
}


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Some error!')
        resolve({id: 2})
    }, 200)
})

promise
    .then(num => num *= 2)
    .catch(err => console.error(err))
    .then(num => num *=3)
    .finally(() => console.log('finally'))
    .then(num  => console.log('Done!', num))