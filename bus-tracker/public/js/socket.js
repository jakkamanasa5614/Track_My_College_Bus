const socket = io();

// Example: Send a message (for debugging)
socket.emit("test", { message: "Hello from the client!" });

// Listen for updates
socket.on("locationUpdate", (data) => {
  console.log("New location update:", data);
});
