function analyzePage() {
  const url = document.getElementById("urlInput").value;

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  document.getElementById("result").classList.remove("hidden");

  document.getElementById("purpose").innerText =
    "Provide information or service related to the page";

  document.getElementById("ymyl").innerText =
    "Clear YMYL – Health / Safety";

  document.getElementById("reputation").innerText =
    "Positive reputation";

  document.getElementById("mc").innerText =
    "Satisfying Main Content";

  document.getElementById("eeat").innerText =
    "Trustworthy with adequate expertise";

  document.getElementById("pq").innerText =
    "High";
}

