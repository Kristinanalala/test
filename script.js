let number = document.querySelector('.number');
let dataMonth = document.querySelector('.dataMonth');
let dataYear = document.querySelector('.dataYear');
let password = document.querySelector('.password');

number.addEventListener('keyup', (e) => {
    let target = e.target;
    let value = target.value;
    if (value.length === 16 && !isNaN(value) ) {
        target.classList.remove('red');
    } else {
        target.classList.add('red');
    }

});

dataMonth.addEventListener('keyup', (e) => {
    let target = e.target;
    let value = target.value;
    let date = new Date();
    console.log(dataYear.value);

    if (value.length === 2 && !isNaN(value) && (value >= 1 && value <= 12) && checkDate(value, dataYear.value)) {
        target.classList.remove('red');
    } else {
        target.classList.add('red');
    }
});
dataYear.addEventListener('keyup', (e) => {
    let target = e.target;
    let value = target.value;
    let date = new Date();
    let year = date.getFullYear();

    console.log(dataMonth.value);
    if (value.length === 4 && !isNaN(value) && checkDate(dataMonth.value, value)) {
        target.classList.remove('red');
    } else {
        target.classList.add('red');
    }
});


password.addEventListener('keyup', (e) => {
    let target = e.target;
    let value = target.value;
    if (value.length === 3 && !isNaN(value) ) {
        target.classList.remove('red');
    } else {
        target.classList.add('red');
    }
    console.log(e);
});


function checkDate(month, year) {
    let today = new Date();
    let userDate = new Date(year, month, 1);
    console.log(userDate);
    if (userDate > today) {
        dataMonth.classList.remove('red');
        dataYear.classList.remove('red');
    } else {
        dataMonth.classList.add('red');
        dataYear.classList.add('red');
    }
    return userDate > today;
}

