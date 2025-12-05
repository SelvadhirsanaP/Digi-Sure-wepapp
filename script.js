document.getElementById("addressForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;

    document.getElementById("response").innerText = 
        "Your address has been submitted for verification. Tracking ID: DIGI-" + Math.floor(Math.random() * 99999);
});
