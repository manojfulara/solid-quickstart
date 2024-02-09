import { createSignal, onCleanup } from "solid-js";
import Counter from "~/components/Counter";

export default function Home() {
  const [ipv4Address, setIPv4Address] = createSignal("Loading...");
  const [ipv6Address, setIPv6Address] = createSignal("Loading...");

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
    console.log("displaying ip");
    const ipv4AddressValue = await getIpAddress("https://api.ipify.org?format=json");
    const ipv6AddressValue = await getIpAddress("https://api64.ipify.org?format=json");
    console.log("displaying ip s",ipv4AddressValue,ipv6AddressValue);
    setIPv4Address(ipv4AddressValue);
    setIPv6Address(ipv6AddressValue);
  }

  // Run the displayIPv4Address function when the component mounts
  onCleanup(() => {
    window.onload = displayIPv4Address();
  });

  return (
    <main>
      <h1>Your IPv4 Address:</h1>
      <p>{ipv4Address()}</p>
      <h1>Your IPv6 Address:</h1>
      <p>{ipv6Address()}</p>
    </main>
  );
}
