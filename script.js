const button = document.querySelector(".button");
const ipAddress = document.querySelector(".IP");
const locayy = document.querySelector(".Locayy");
const time = document.querySelector(".Time");
const isp = document.querySelector(".ISp");

button.addEventListener("click", fetchDetails);
window.addEventListener("load", fetchDetails);

async function fetchDetails() {
  try {
    const searchInput = document.getElementById("searchInput");
    const ipAddressValue = searchInput.value;

    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_UZ8BqXw8IPhdMfibRH6FoX1VrWZnN&ipAddress=${ipAddressValue}`
    );

    if (response.ok) {
      const details = await response.json();

      ipAddress.innerHTML = `${details.ip}`;
      locayy.innerHTML = `${
        details.location.country + "," + details.location.region
      }`;
      time.innerHTML = `${details.location.timezone}`;
      isp.innerHTML = `${details.isp}`;
    } else {
      console.error("Error fetching details:", response.statusText);
      ipAddress.innerHTML = "N/A";
      locayy.innerHTML = "N/A";
      time.innerHTML = "N/A";
      isp.innerHTML = "N/A";
    }
  } catch (error) {
    console.error("Error fetching details:", error);
    ipAddress.innerHTML = "N/A";
    locayy.innerHTML = "N/A";
    time.innerHTML = "N/A";
    isp.innerHTML = "N/A";
  }
}

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();
