class DB {
    database
    constructor(config) {
        firebase.initializeApp(config)
        this.database = firebase.database()
    }

    rank(rank) {
        const obj = {
            rank: rank !== null ? rank : null,
            firstname: null,
            lastname: null,
            school: null,
            student_number: null,
        }
        return obj
    }

    add(serializeArray) {
        const data = {}
        serializeArray.forEach(item => {
            if (item.value)
                data[item.name] = item.value
        })
        // return this.database.ref('user/').push(data)
        // this.database.ref('user').push(data, function (callback) {
        //     console.log(callback)
        // })
        return this.database.ref('user').push(data)
        console.log('end')
    }

    async numChildren(callback) {
        const snapshot = await this.database.ref('user/').once('value')
        return snapshot.val()
    }
}



export default DB