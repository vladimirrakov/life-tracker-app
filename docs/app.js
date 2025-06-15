// All JavaScript from <script> tag in app-web-v1.html

function changePage(page) {
  document.querySelectorAll(".page-container").forEach(function (el) {
    el.classList.remove("active");
  });
  document.getElementById(page + "-page").classList.add("active");

  document.querySelectorAll(".nav-item").forEach(function (el) {
    el.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach(function (el, index) {
    if (
      el.textContent
        .trim()
        .toLowerCase()
        .includes(page === "tageseintrag" ? "eingabe" : page)
    ) {
      el.classList.add("active");
    }
  });
  document.querySelectorAll(".nav-icon svg path").forEach(function (path) {
    path.setAttribute("fill", "#999");
  });
  document
    .querySelector(".nav-item.active .nav-icon svg path")
    .setAttribute("fill", "#3A7CA5");
}

// Zusammenfassungs-Modal
function showSummary() {
  document.getElementById("summary-container").style.display = "flex";
}
function hideSummary() {
  document.getElementById("summary-container").style.display = "none";
}
function saveAndReturn() {
  hideSummary();
  changePage("dashboard");
}

// Stimmungs-Optionen
document.addEventListener("DOMContentLoaded", function () {
  const radioOptions = document.querySelectorAll(".radio-circle");
  radioOptions.forEach((option) => {
    option.addEventListener("click", function () {
      radioOptions.forEach((opt) => {
        opt.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
});

// Mood selection logic for custom radio UI
function selectMood(id) {
  const radios = document.querySelectorAll('#mood-group input[type="radio"]');
  const circles = document.querySelectorAll("#mood-group .radio-circle");
  radios.forEach((r) => (r.checked = false));
  circles.forEach((c) => c.classList.remove("selected"));
  document.getElementById(id).checked = true;
  event.target.closest(".radio-circle").classList.add("selected");
}

// Show summary modal and store form data temporarily
let latestEntryData = null;

document.addEventListener("DOMContentLoaded", function () {
  // Attach event to Save Eintrag button
  const saveEintragBtn = document.getElementById("save-eintrag-btn");
  if (saveEintragBtn) {
    saveEintragBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Collect form data
      const form = document.getElementById("entry-form");
      latestEntryData = {
        date: form["entry-date"]?.value || "",
        weight: form["weight"]?.value || "",
        bloodPressure: form["blood-pressure"]?.value || "",
        heartRate: form["heart-rate"]?.value || "",
        sleepQuality: form["sleep-quality"]?.value || "",
        mealType: form["meal-type"]?.value || "",
        calories: form["calories"]?.value || "",
        waterIntake: form["water-intake"]?.value || "",
        sportDone: form["sport-done"]?.checked || false,
        stepsDone: form["steps-done"]?.checked || false,
        activityMinutes: form["activity-minutes"]?.value || "",
        mood: form["mood"]?.value || "",
        stressLevel: form["stress-level"]?.value || "",
        notes: form["notes"]?.value || "",
      };
      showSummary();
    });
  }

  // Modal buttons
  const fertigBtn = document.getElementById("summary-fertig-btn");
  if (fertigBtn) {
    fertigBtn.addEventListener("click", function () {
      if (latestEntryData) {
        downloadEntryJSON(latestEntryData);
      }
      hideSummary();
      changePage("dashboard");
    });
  }

  const bearbeitenBtn = document.getElementById("summary-bearbeiten-btn");
  if (bearbeitenBtn) {
    bearbeitenBtn.addEventListener("click", function () {
      hideSummary();
      changePage("tageseintrag");
    });
  }
});

// Show summary modal
// function showSummary() {
//   document.getElementById("summary-container").style.display = "flex";
// }
// Show summary modal and display all form entries
function showSummary() {
  document.getElementById("summary-container").style.display = "flex";
  const summaryItems = document.getElementById("summary-items");
  if (!latestEntryData) return;

  // Map for pretty labels (add more as needed)
  const labels = {
    date: "Datum",
    weight: "Gewicht",
    bloodPressure: "Blutdruck",
    heartRate: "Puls",
    sleepQuality: "Schlafqualität",
    mealType: "Mahlzeit",
    calories: "Kalorien",
    waterIntake: "Wasser (ml)",
    sportDone: "Sport gemacht",
    stepsDone: "Schritte gemacht",
    activityMinutes: "Aktivitätsminuten",
    mood: "Stimmung",
    stressLevel: "Stresslevel",
    notes: "Notizen",
  };

  // Format values for display
  function formatValue(key, value) {
    if (key === "weight" && value) return value + " kg";
    if (key === "bloodPressure" && value) return value + " mmHg";
    if (key === "heartRate" && value) return value + " bpm";
    if (key === "calories" && value) return value + " kcal";
    if (key === "waterIntake" && value) return value + " ml";
    if (key === "sportDone") return value ? "Ja" : "Nein";
    if (key === "stepsDone") return value ? "Ja" : "Nein";
    if (key === "activityMinutes" && value) return value + " min";
    if (key === "mood" && value) return value;
    if (key === "stressLevel" && value) return value + " / 10";
    if (key === "notes" && value) return value;
    return value || "-";
  }

  // Build summary HTML
  let html = "";
  Object.keys(labels).forEach((key) => {
    html += `
      <div class="summary-item">
        <div class="summary-label">${labels[key]}</div>
        <div class="summary-value">${formatValue(
          key,
          latestEntryData[key]
        )}</div>
      </div>
    `;
  });
  summaryItems.innerHTML = html;
}

// Hide summary modal
function hideSummary() {
  document.getElementById("summary-container").style.display = "none";
}

// Download form data as JSON
function downloadEntryJSON(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `life-tracker-entry-${data.date || "unbekannt"}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
}
