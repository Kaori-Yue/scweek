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
    const style_fadeout = 'transition: all 1000ms linear';

    [
        snapshot.key,
        user.name,
        user.lastname,
        user.sex,
        user.academy,
        user.education,
        user.rank,
        user['n-of-student'],
        user.age,
    ].forEach(ele => {
        element.appendChild(updateTable(ele))
    });

    $('table tbody').append(element)
    element.className = 'table-success'

    setTimeout(() => {
        element.className = ''
    }, 2000);
})


db.database.ref('user').on('child_changed', function (snapshot) {
    const user = snapshot.val()
    const keyElement = document.querySelector(`[key=${snapshot.key}]`)
    keyElement.innerHTML = '';

    [
        snapshot.key,
        user.name,
        user.lastname,
        user.sex,
        user.academy,
        user.education,
        user.rank,
        user['n-of-student'],
        user.age,
    ].forEach(val => {
        keyElement.appendChild(updateTable(val))
    });

    keyElement.className = 'table-warning'
    setTimeout(() => {
        keyElement.className = null
    }, 2000);
})

function updateTable(val) {
    const element = document.createElement('td')
    element.textContent = val
    element.style.transition = 'all 1000ms linear'
    return element
}

db.database.ref('user').on('child_removed', function (snapshot) {
    const removedUser = snapshot.val()
    const keyElement = document.querySelector(`[key=${snapshot.key}]`)
    keyElement.className = 'table-danger'
    setTimeout(() => {
        keyElement.remove()
    }, 2000)
})

// button[id^=toggle]
$('#toggleSex').on('click', function (e) {
    const main = $('thead th:contains("Sex")')
    main.toggle()
    $(`td:nth-child(${main.index()})`)
    // $('td:nth-child(2),th:nth-child(2)').toggle()
})

$('#toggleAcademy').on('click', function (e) {
    const main = $('thead th:contains("Academy")')
    main.toggle()
    $(`td:nth-child(${main.index()})`)
})

$('#toggleEducation').on('click', function (e) {
    const main = $('thead th:contains("Education")')
    main.toggle()
    $(`td:nth-child(${main.index()})`)
})

$('#toggleRank').on('click', function (e) {
    const main = $('thead th:contains("Education")')
    main.toggle()
    $(`td:nth-child(${main.index()})`)
})

$('#toggleN-Students').on('click', function (e) {
    const main = $('thead th:contains("N-Students")')
    main.toggle()
    $(`td:nth-child(${main.index()})`)
})

$('#toggleAge').on('click', function (e) {
    const main = $('thead th:contains("Age")')
    main.toggle()
    $(`td:nth-child(${main.index()})`)
})