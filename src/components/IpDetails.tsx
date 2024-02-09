// Import necessary Solid.js modules
import { createSignal } from "solid-js";
import styles from "./IpDetails.module.css"; // Create a separate CSS module

// Define the component
// IpDetails.jsx


const IpDetails = (props) => {
  const {
    ip,
    continent_code,
    continent_name,
    country_code2,
    country_code3,
    country_name,
    country_name_official,
    country_capital,
    state_prov,
    state_code,
    district,
    city,
    zipcode,
    latitude,
    longitude,
    is_eu,
    calling_code,
    country_tld,
    languages,
    country_flag,
    geoname_id,
    isp,
    connection_type,
    organization,
    currency,
    time_zone,
  } = props.data;
console.log("meowio", ip,
    continent_code,
    continent_name,
    country_code2);
  return (
    <div class={styles.ipDetails}>
      <h2>IP Details</h2>
      <ul>
        <li><strong>IP Address:</strong> {ip}</li>
        <li><strong>Continent:</strong> {continent_name} ({continent_code})</li>
        <li><strong>Country:</strong> {country_name} ({country_code2})</li>
        <li><strong>Official Country Name:</strong> {country_name_official}</li>
        <li><strong>Country Capital:</strong> {country_capital}</li>
        <li><strong>State/Province:</strong> {state_prov} ({state_code})</li>
        <li><strong>District:</strong> {district}</li>
        <li><strong>City:</strong> {city}</li>
        <li><strong>ZIP Code:</strong> {zipcode}</li>
        <li><strong>Latitude:</strong> {latitude}</li>
        <li><strong>Longitude:</strong> {longitude}</li>
        <li><strong>EU Member:</strong> {is_eu ? "Yes" : "No"}</li>
        <li><strong>Calling Code:</strong> {calling_code}</li>
        <li><strong>Country Top-Level Domain:</strong> {country_tld}</li>
        <li><strong>Languages:</strong> {languages}</li>
        <li><strong>Country Flag:</strong> <img src={country_flag} alt="Flag" /></li>
        <li><strong>Geoname ID:</strong> {geoname_id}</li>
        <li><strong>ISP:</strong> {isp}</li>
        <li><strong>Connection Type:</strong> {connection_type}</li>
        <li><strong>Organization:</strong> {organization}</li>
        <li><strong>Currency:</strong> {currency?.code} ({currency?.symbol}) - {currency?.name}</li>
        <li><strong>Time Zone:</strong> {time_zone?.name} (UTC{time_zone?.offset_with_dst > 0 ? '+' : ''}{time_zone?.offset_with_dst})</li>
        <li><strong>Current Time:</strong> {time_zone?.current_time}</li>
      </ul>
    </div>
  );
};

export default IpDetails;
