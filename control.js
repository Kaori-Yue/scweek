// Bootstrap with jq

// Config
import DB from './database.js'
const config = {
    apiKey: "AIzaSyBWwtg1WueRZkJpee8oQbGLR5Z3zsIZwlQ",
    authDomain: "scweek-4835c.firebaseapp.com",
    databaseURL: "https://scweek-4835c.firebaseio.com",
}
// firebase.initializeApp(config)
const db = new DB(config)
const education = [
    "อนุบาล 1",
    "อนุบาล 1",
    "อนุบาล 1",
    "ประถมศึกษาปีที่ 1",
    "ประถมศึกษาปีที่ 1",
    "ประถมศึกษาปีที่ 1",
    "ประถมศึกษาปีที่ 1",
    "ประถมศึกษาปีที่ 1",
    "ประถมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 1",
    "ปริญญาตรี",
    "ปริญญาโท",
    "ปริญญาเอก"
]

// Init on ready
$(function () {
    // Control div onClick
    $('.container .col-sm.div-mouseover[rank]').on('click', function () {
        const rank = $(this).attr('rank')
        $('#exampleModalCenter').attr('rank', rank)
        $('#infoForm #rank').attr('value', rank)
        // 
        $('.modal-body #name').val(rank)
        $('#exampleModalCenter').modal()
    })

    // Add text to select
    initSelect()
})

function initSelect() {
    /**
     * @type {HTMLSelectElement}
     */
    const select = $('select#education')
    select.options
    education.forEach((item) => {
        const option = new Option(item, item)
        select.append(option)
    })
}

// Modal Control
$('#exampleModalCenter').on('show.bs.modal', function (e) {
    const rank = $(this).attr('rank')
    $(`[rank=${rank}]`, this).css('display', 'block')
    $(`[rank=${rank}] input, select`, this).each(function (index, item) {
        $(item).attr('name', $(item).attr('_name'))
    })
})

$('#exampleModalCenter').on('hide.bs.modal', function () {
    const rank = $(this).attr('rank')
    $(`[rank=${rank}]`, this).css('display', 'none')
    $(`[rank=${rank}] input, select`, this).each(function (index, item) {
        $(item).attr('name', null)
    })
})
    // db.add()

    ; (async () => {
        // console.log(await db.numChildren())
        // console.log( await db.database.child('user').orderByChild('rank').equalTo("student").once('value') )
    })()


// Submit Control
$('#infoForm').submit(function () {
    const subbmit = $('button[type="submit"]', this)
    subbmit.prop('disabled', true)
    const form = $(this).serializeArray()

    const status = db.add(form)
    status
        .then(function onSuccess(res) {
            $('#qrcode_container').removeClass('d-none')
            $('#qrcode').empty()
            $('#qrcode').qrcode(res.key)
            subbmit.prop('disabled', false)
        })
        .catch(function onError(res) {
            console.log('err', res)
        })
    return false // for don't redirect
})

$('#infoForm').on('reset', function () {
    $('#qrcode_container').addClass('d-none')
    $('#qrcode').empty()
})
//
