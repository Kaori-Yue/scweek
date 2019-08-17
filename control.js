// Bootstrap with jq

// Config
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
