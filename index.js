const submit = document.getElementById('form-button');
const colorDots = document.getElementsByClassName('color-theme-dots');

for (let a = 0; a < 4; a++) {
    colorDots[a].addEventListener('click', function () {
        const theme = colorDots[a].id;
        setTheme(theme);
    })
}

function setTheme(mode) {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'style.css';
    } else {
        document.getElementById('theme-style').href = `${mode}.css`;
    }
}


submit.addEventListener('click', sendMail);

async function sendMail(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');

    const target = e.target;
    const parentNode = target.parentNode;
    const parentElement = parentNode.parentElement;

    try {

        if (name.value || email.value || subject.value) {

            await emailjs.sendForm('service_2b2dv69', 'template_jrxnf6h', parentElement, 'user_cHmfISm7sED5Rr2y3J6Uv');
            alert("Message Sent");
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.subject.value = '';
        } else {
            throw new Error('Fill all fields!');
        }

    } catch (err) {
        alert(err.message);
    }
}