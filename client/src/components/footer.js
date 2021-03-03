import React from "react";
import "./footer.css"
function Footer() {
  return (
    <div class="d-flex flex-column">
    <footer class="footer bg-dark">
      <div>
        Axolotl
        <span>&copy; 2021</span>
      </div>
      <div class="ml-auto">
        <span>Powered by </span>
        Lindsey Baginski, Corrine Pusillo, Heena Rajpal,<br/>
       Britney Borrero,
        Timothy Balascak-Huber
      </div>
    </footer>
  </div>
  );
}

export default Footer;