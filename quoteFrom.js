const form = document.getElementById("quoteForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("qName");
    const email = document.getElementById("qEmail");
    const phone = document.getElementById("qPhone");
    const freight = document.getElementById("qFreight");
    const pickup = document.getElementById("qPickup");
    const delivery = document.getElementById("qDelivery");
    const weight = document.getElementById("qWeight");
    const height = document.getElementById("qHeight");

    // Clear previous errors
    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    let isValid = true;

    // Name
    if (name.value.trim() === "") {
        document.querySelector("#qName + .error").textContent = "Name is required";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name.value.trim())) {
        document.querySelector("#qName + .error").textContent = "Only letters are allowed";
        isValid = false;
    } else if (name.value.trim().length < 3) {
        document.querySelector("#qName + .error").textContent = "Minimum 3 characters";
        isValid = false;
    }

    // Email
    if (email.value.trim() === "") {
        document.querySelector("#qEmail + .error").textContent = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.querySelector("#qEmail + .error").textContent = "Enter a valid email";
        isValid = false;
    }

    // Phone
    if (phone.value.trim() === "") {
        document.querySelector("#qPhone + .error").textContent = "Phone number is required";
        isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone.value.trim())) {
        document.querySelector("#qPhone + .error").textContent = "Phone number must be 10 digits";
        isValid = false;
    }

    // Freight
    if (freight.value === "") {
        document.querySelector("#qFreight + .error").textContent = "Select freight type";
        isValid = false;
    }

    // Pickup
    if (pickup.value.trim() === "") {
        document.querySelector("#qPickup + .error").textContent = "Pickup location is required";
        isValid = false;
    }

    // Delivery
    if (delivery.value.trim() === "") {
        document.querySelector("#qDelivery + .error").textContent = "Delivery location is required";
        isValid = false;
    }

    // Weight
    if (weight.value.trim() === "") {
        document.querySelector("#qWeight + .error").textContent = "Weight is required";
        isValid = false;
    } else if (Number(weight.value) <= 0) {
        document.querySelector("#qWeight + .error").textContent = "Enter a valid weight";
        isValid = false;
    }

    // Height
    if (height.value.trim() === "") {
        document.querySelector("#qHeight + .error").textContent = "Height is required";
        isValid = false;
    } else if (Number(height.value) <= 0) {
        document.querySelector("#qHeight + .error").textContent = "Enter a valid height";
        isValid = false;
    }

    // Submit only if all fields are valid
    if (isValid) {
        alert("Form Submitted Successfully!");
        form.reset();
    }
});

const name = document.getElementById("qName");

name.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});
const name = document.getElementById("qName");

name.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});