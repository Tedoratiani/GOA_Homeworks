const form = document.querySelector("form");
const myDiv = document.querySelector("div");

const handleSubmit = () => {
    myDiv.innerHTML = "";

    myDiv.innerHTML = `
        <p>Fullname: ${form.fullname.value}</p>
        <p>Email: ${form.email.value}</p>
        <p>Password: ${form.password.value}</p>
        <button>Delete account</button>
    `
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    handleSubmit();
})