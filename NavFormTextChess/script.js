function gorunum() {
    var form = document.getElementById('form-box');
    if (form.style.visibility === 'hidden') {
        form.style.visibility = 'visible';
    } else {
        form.style.visibility = 'hidden';
    }
}

// function close() {
//     var formm = document.getElementById('form-box');
//     if (formm.style.visibility === 'visible') {
//         formm.style.visibility = 'hidden';
//     } else {
//         formm.style.visibility = 'visible';
//     }
// }

// $('#signin').on('click', function() {
//     $('.form-container').show();
// });

// $('#cancel').on('click', function() {
//     $('.form-container').hide();
// });