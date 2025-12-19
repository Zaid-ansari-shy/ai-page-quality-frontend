function analyzePage() {
  const url = document.getElementById("urlInput").value;

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  // Show loading state
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("purpose").innerText = "Analyzing...";
  document.getElementById("ymyl").innerText = "-";
  document.getElementById("reputation").innerText = "-";
  document.getElementById("mc").innerText = "-";
  document.getElementById("eeat").innerText = "-";
  document.getElementById("pq").innerText = "-";

  fetch("https://ai-page-quality-backend.onrender.com/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: url })
  })
    .then(response => response.json())
    .then(data => {
      // This matches your CURRENT backend (dummy response)
      document.getElementById("purpose").innerText =
        "Backend connected successfully";

      document.getElementById("ymyl").innerText =
        "URL received by backend";

      document.getElementById("reputation").innerText =
        "OK";

      document.getElementById("mc").innerText =
        JSON.stringify(data, null, 2);

      document.getElementById("eeat").innerText =
        "OK";

      document.getElementById("pq").innerText =
        "Backend Working";
    })
    .catch(error => {
      document.getElementById("purpose").innerText = "Error";
      document.getElementById("mc").innerText = error.toString();
    });
}
