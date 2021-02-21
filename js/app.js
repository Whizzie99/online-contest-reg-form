// animating input fields
const form = document.querySelector('form');
const materialInputs = form.querySelectorAll('.material-input > input');
const materialSelects = form.querySelectorAll('.material-input > select');

function materialize() {
    this.parentElement.classList.add('materialize');
}

function dematerialize() {
    if (this.value === '')
        this.parentElement.classList.remove('materialize');
}

materialInputs.forEach(input => {
    input.addEventListener("focus", materialize);
    input.addEventListener("blur", dematerialize);
});

materialSelects.forEach(selected => {
    selected.addEventListener("focus", materialize);
    selected.addEventListener("blur", dematerialize);
});


// contest image and payment receipt upload

function showcontestImg(event){
    if(event.target.files.length > 0){
        const src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById('preview-img');

        preview.src = src;
    }
}

function showEvidence(event){
    if(event.target.files.length > 0){
        const src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById('preview-evidence');

        preview.src = src;
    }
}

// hide and show payment note
const btnContinue = document.querySelector('.btn-continue');
const payArea = document.querySelector('.pay-area');
const btnFinish = document.querySelector('.btn-finish');

btnContinue.addEventListener('click', showPayArea);

function showPayArea(e){
    btnContinue.classList.add('animate__animated', 'animate__fadeOutRight');
    btnContinue.style.display = 'none';
    payArea.style.display = 'block';
    payArea.classList.add('animate__animated', 'animate__fadeInUp');
    btnFinish.classList.add('animate__animated', 'animate__fadeInUp');
    btnFinish.style.display = 'block';

}

// error message and success message
const closeError = document.querySelector('.error-msg .close-btn');
const closeSuccess = document.querySelector('.success-msg .close-btn');

closeError.addEventListener('click', hideErrorMsg);
closeSuccess.addEventListener('click', hideSuccessMsg);


function hideErrorMsg(){
    this.parentElement.style.display = 'none';
}

function hideSuccessMsg(){
    this.parentElement.style.display = 'none';
}