.then(data => {
  if (data.error) {
    document.getElementById("purpose").innerText = "Error";
    document.getElementById("mc").innerText = data.error;
    return;
  }

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
