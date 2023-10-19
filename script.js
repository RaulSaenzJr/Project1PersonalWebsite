const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');

nextBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('next');
    })
})
prevBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('prev')
    })
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll('input').forEach(input => {
        const {
            name,
            value
        } = input;
        inputs.push({
            name,
            value
        })
    })
    console.log(inputs)
    form.reset();
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    steps[0].classList.add('active');
})

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active)
    steps[index].classList.remove('active');
    if (btn === 'next') {
        index++;
    } else if (btn === 'prev') {
        index--;
    }
    steps[index].classList.add('active')
}
var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)