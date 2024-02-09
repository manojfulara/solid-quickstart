import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
     <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My IPv4 Address</title>
  </head>
  <body>
    <h1>Your IPv4 Address:</h1>
    <p id="ipv4-address">Loading...</p>
    <h1>Your IPv6 Address:</h1>
    <p id="ipv6-address">Loading...</p>

    <script>
      async function getIpAddress(apiAddress) {
        try {
          const response = await fetch(apiAddress);
          const data = await response.json();
          return data.ip;
        } catch (error) {
          console.error("Error fetching IP address:", error.message);
          return "Error";
        }
      }

      async function displayIPv4Address() {
        const ipv4AddressElement = document.getElementById("ipv4-address");
        const ipv6AddressElement = document.getElementById("ipv6-address");
        const ipv4Address = await getIpAddress(
          "https://api.ipify.org?format=json"
        );
        const ipv6Address = await getIpAddress(
          "https://api64.ipify.org?format=json"
        );
        <!-- const ipv4Address = extractIPv4(ipAddress); -->
        ipv4AddressElement.textContent = ipv4Address;
        ipv6AddressElement.textContent = ipv6Address;
      }

      window.onload = displayIPv4Address;
    </script>
  </body>
</html>
    </main>
  );
}
