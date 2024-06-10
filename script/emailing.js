const url_1 = "https://apiservices.psaadalla.com/api";
const url_2 = "https://portfolio-page-0vo3.onrender.com/api";

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const sender = document.getElementById("sender").value;
    const text = document.getElementById("message").value;

    fetch(url_1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender, text }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully");
        } else {
          alert("Email not sent. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Email not sent. Please try again later.");
      });
  });
