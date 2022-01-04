const Form = document.querySelector("form");
const FormElements = {
    card: null,
    cvc: null,
    amount: null,
    first_name: null,
    last_name: null,
    city: null,
    state: null,
    postal_code: null,
    message: null
}

const CheckFormElements = () => {
    FormElements.card = document.querySelector("#card-number");
    FormElements.cvc = document.querySelector("#cvc");
    FormElements.amount = document.querySelector("#amount");
    FormElements.first_name = document.querySelector("#first-name");
    FormElements.last_name = document.querySelector("#last-name");
    FormElements.city = document.querySelector("#city");
    FormElements.state = document.querySelector("#state");
    FormElements.postal_code = document.querySelector("#postal-code");
    FormElements.message = document.querySelector("#message");

    for (const property in FormElements) {
        const FormItem = FormElements[property];
        FormItem.classList.remove("is-valid", "is-invalid"); // remove previous class
        FormItem.classList.add((!FormItem.checkValidity()) ? "is-invalid" : "is-valid"); // assign new class according to validity
    }
}

Form.addEventListener("change", () => CheckFormElements());
Form.addEventListener("submit", (e) => (document.querySelectorAll(".is-valid").length === Object.keys(FormElements).length) ? alert("Is a valid form submission!") : e.preventDefault());
