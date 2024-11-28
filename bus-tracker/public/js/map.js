function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 0, lng: 0 },
      zoom: 15,
    });
  
    const marker = new google.maps.Marker({
      position: { lat: 0, lng: 0 },
      map,
      title: "Bus Location",
    });
  
    const socket = io();
    socket.on("locationUpdate", (data) => {
      marker.setPosition({ lat: data.latitude, lng: data.longitude });
      map.setCenter({ lat: data.latitude, lng: data.longitude });
    });
    
  }
  
  // Load Google Maps API
  document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  });
  const socket = io();

// Update map marker on location update
socket.on("locationUpdate", (data) => {
  console.log("New location:", data);
});

  