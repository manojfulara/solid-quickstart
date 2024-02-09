import { createSignal, onCleanup } from "solid-js";
import IpDetails from "~/components/IpDetails";

export default function Home() {
  const [ipv4Address, setIPv4Address] = createSignal("Loading...");
  const [ipv6Address, setIPv6Address] = createSignal("Loading...");
  const [ispData, setIspData] = createSignal("Loading...");

  async function getData(apiAddress) {
    try {
      const response = await fetch(apiAddress);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching IP address:", error.message);
      return "Error";
    }
  }

  async function displayIPv4Address() {
    console.log("displaying ip");
    const ipv4AddressValue = await getData("https://api.ipify.org?format=json");
    const ipv6AddressValue = await getData("https://api64.ipify.org?format=json");
    const ispData = await getData(`http://ip-api.com/json/${ipv4AddressValue.ip}`);
    console.log("displaying ip s", ipv4AddressValue.ip, ipv6AddressValue.ip,ispData);
    setIPv4Address(ipv4AddressValue.ip);
    setIPv6Address(ipv6AddressValue.ip);
    setIspData(ispData);
  }

  // Run the displayIPv4Address function immediately when the component mounts
  displayIPv4Address();

  // Cleanup function (optional)
  onCleanup(() => {
    // Perform cleanup here if needed
  });

  return (
    <main>
      <h1>Your  <strong>IPv4</strong> Address:</h1>
      <p><strong>{ipv4Address()}</strong></p>
      <h1>Your  <strong>IPv4</strong> Address:</h1>
      <p><strong>{ipv6Address()}</strong></p>
      <IpDetails data={ispData} />
    </main>
  );
}
