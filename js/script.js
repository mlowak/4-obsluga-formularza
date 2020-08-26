const wyslijFormularz = (event) => {
    event.prevontDefault();

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstName.value}, nazwisko ${lastName.value}`);

    // można też stosować pętlę, jeśli formularz posiada wiele pól
}

let form = document.getElementById('form');
form.addEventListener('submit', wyslijFormularz);

