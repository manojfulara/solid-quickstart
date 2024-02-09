// Import necessary Solid.js modules
import { createSignal } from "solid-js";
import styles from "./IpDetails.module.css"; // Create a separate CSS module

// Define the component
const IpDetails = (props) => {
  // Destructure the JSON data from props
  console.log("IpDetails",props);
  const { query, status, country, countryCode, region, regionName, city, zip, lat, lon, timezone, isp, org, as } = props.data;

  return (
    <div class={styles.ipDetails}>
      <h2>IP Details</h2>
      <ul>
        <li><strong>IP Address:</strong> {query}</li>
        <li><strong>Status:</strong> {status}</li>
        <li><strong>Country:</strong> {country} ({countryCode})</li>
        <li><strong>Region:</strong> {region} - {regionName}</li>
        <li><strong>City:</strong> {city}</li>
        <li><strong>ZIP Code:</strong> {zip}</li>
        <li><strong>Latitude:</strong> {lat}</li>
        <li><strong>Longitude:</strong> {lon}</li>
        <li><strong>Timezone:</strong> {timezone}</li>
        <li><strong>ISP:</strong> {isp}</li>
        <li><strong>Organization:</strong> {org}</li>
        <li><strong>AS (Autonomous System):</strong> {as}</li>
      </ul>
    </div>
  );
};

// Export the component
export default IpDetails;
