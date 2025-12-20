function analyzePage() {
  const url = document.getElementById("urlInput").value;

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  // Reset UI
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
    .then(res => res.json())
    .then(data => {
      // If backend returned error
      if (data.error) {
        document.getElementById("purpose").innerText = "Error";
        document.getElementById("mc").innerText =
          data.error + (data.details ? " : " + data.details : "");
        return;
      }

      // Map AI JSON correctly
      document.getElementById("purpose").innerText =
        data.purpose || "-";

      document.getElementById("ymyl").innerText =
        data.ymyl || "-";

      document.getElementById("reputation").innerText =
        data.reputation || "-";

      document.getElementById("mc").innerText =
        data.mc_quality || "-";

      document.getElementById("eeat").innerText =
        data.eeat || "-";

      document.getElementById("pq").innerText =
        data.overall_pq || "-";
    })
    .catch(err => {
      document.getElementById("purpose").innerText = "Error";
      document.getElementById("mc").innerText = err.toString();
    });
}
