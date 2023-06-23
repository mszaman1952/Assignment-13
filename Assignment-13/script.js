function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener('click', () => {
    if(modeToggleBtn.innerHTML == 'Dark Mode'){
      modeToggleBtn.innerHTML = 'Light Mode';
      modeToggleBtn.style.background = "silver";
      modeToggleBtn.style.color = "black"
    }
    else{
      modeToggleBtn.innerHTML = 'Dark Mode';
      modeToggleBtn.style.background = 'black';
      modeToggleBtn.style.color = 'white'
    }
})
function createBarChart() {
  const e = document.getElementById("myCanvas").getContext("2d");
  new Chart(e, {
    type: "bar",
    data: {
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F"],
      datasets: [{
        label: "Wins",
        data: [13, 8, 7, 6, 9, 11],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1
      }]
    },
    options: {
      responsive: !0,
      scales: {
        y: {
          beginAtZero: !0
        }
      }
    }
  })
}
modeToggleBtn.addEventListener("click", toggleMode), createBarChart();
const totalPages = 6;
let currentPage = 1;

function showPage(e) {
  const t = document.getElementsByClassName("league-data-page");
  for (let a = 0; a < t.length; a++) t[a].style.display = a + 1 === e ? "block" : "none";
  const a = document.getElementById("previous-page"),
    o = document.getElementById("next-page");
  a.style.display = 1 === e ? "none" : "block", o.style.display = e === totalPages ? "none" : "block", currentPage = e
}

function previousPage() {
  currentPage > 1 && showPage(currentPage - 1)
}

function nextPage() {
  currentPage < totalPages && showPage(currentPage + 1)
}
showPage(1);