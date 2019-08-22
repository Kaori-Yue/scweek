import DB from './database.js'
const config = {
    apiKey: "AIzaSyBWwtg1WueRZkJpee8oQbGLR5Z3zsIZwlQ",
    authDomain: "scweek-4835c.firebaseapp.com",
    databaseURL: "https://scweek-4835c.firebaseio.com",
}
const db = new DB(config)




db.database.ref('user').on('child_added', function (snapshot) {
    const user = snapshot.val()
    const element = document.createElement('tr')
    element.setAttribute('key', snapshot.key)
    const style_fadeout = 'transition: all 1000ms linear'

    const index = element.appendChild(document.createElement('td'))
    index.textContent = snapshot.key
    index.style.transition = 'all 1000ms linear'

    const firstname = element.appendChild(document.createElement('td'))
    firstname.textContent = user.name
    firstname.style.transition = 'all 1000ms linear'

    const lastname = element.appendChild(document.createElement('td'))
    lastname.textContent = user.lastname
    lastname.style.transition = 'all 1000ms linear'

    const rank = element.appendChild(document.createElement('td'))
    rank.textContent = user.rank
    rank.style.transition = 'all 1000ms linear'


    $('table tbody').append(element)
    element.className = 'table-success'

    setTimeout(() => {
        element.className = ''
    }, 2000);
})


db.database.ref('user').on('child_changed', function (snapshot) {
    const changedUser = snapshot.val()
    console.log(changedUser)
    const keyElement = document.querySelector(`[key=${snapshot.key}]`)
    keyElement.innerHTML = ''

    const index = keyElement.appendChild(document.createElement('td'))
    index.textContent = snapshot.key
    index.style.transition = 'all 1000ms linear'

    const firstname = keyElement.appendChild(document.createElement('td'))
    firstname.textContent = changedUser.name
    firstname.style.transition = 'all 1000ms linear'

    const lastname = keyElement.appendChild(document.createElement('td'))
    lastname.textContent = changedUser.lastname
    lastname.style.transition = 'all 1000ms linear'

    const rank = keyElement.appendChild(document.createElement('td'))
    rank.textContent = changedUser.rank
    rank.style.transition = 'all 1000ms linear'

    keyElement.className = 'table-warning'
    setTimeout(() => {
        keyElement.className = null
    }, 2000);
})

db.database.ref('user').on('child_removed', function(snapshot) {
    const removedUser = snapshot.val()
    const keyElement = document.querySelector(`[key=${snapshot.key}]`)
    keyElement.className = 'table-danger'
    setTimeout(() => {
        keyElement.remove()
    }, 2000)
})