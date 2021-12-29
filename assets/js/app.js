const form = document.querySelector("form")
const form_elements = form.elements; // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let validation = true;
    for (let form_item of form_elements) {
        if (form_item.tagName === "BUTTON") { continue; } // form.elements selects all the elements of the form, but we only want to evaluate the input elements

        form_item.classList.remove("is-valid", "is-invalid"); // delete previous classes

        if (!check_empty_value(form_item.value)) {
            validation = false;
            form_item.classList.add("is-invalid");
        }
        else {
            form_item.classList.add("is-valid");
        }
    }

    if (validation) {
        alert("Is a valid form submission!");
    }
});

const check_empty_value = (value) => {
    return (value.trim().length === 0) ? false : true;
}
