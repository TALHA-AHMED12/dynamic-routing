"use client";  // Mark the component as a Client Component

import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { countries } from '../../data/countries'; // Adjust the import path as needed

const CountryPage = () => {
  const { country } = useParams(); // Get the dynamic country parameter

  // Find the country by matching the URL parameter
  const countryData = countries.find((c) => c.name.toLowerCase() === country);

  // If the country is not found, display an error message
  if (!countryData) {
    return <h2>Invalid country!</h2>;  // Show error if country not found
  }

  // Display country information
  return (
    <div>
      <h1>{countryData.name}</h1>
      <p><strong>GDP:</strong> {countryData.gdp}</p>
      <p><strong>Population:</strong> {countryData.population}</p>
      <p><strong>Capital:</strong> {countryData.capital}</p>
    </div>
  );
};

export default CountryPage; // Ensure this is a default export
