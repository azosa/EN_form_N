let info = document.getElementById('unsubscribe_warning');
info.style.display = "none";
let unsubscribe = document.getElementById('Q4_2');
let subscribe = document.getElementById('Q4_1');
let prefferedContent = document.getElementsByClassName('form-check-input');



unsubscribe.addEventListener('click', function() {
    if (unsubscribe.checked === true) {
        info.style.display = "block";
        for (let el of prefferedContent) {
            el.checked = false;
            el.disabled = true;
        }
    }
});
subscribe.addEventListener('click', function() {
    if (subscribe.checked === true) {
        info.style.display = "none";
        for (let el of prefferedContent) {
            el.checked = true;
            el.disabled = false;
        }
    }
});