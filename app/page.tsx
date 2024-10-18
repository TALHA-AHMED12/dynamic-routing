import { countries } from './data/countries';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1><strong><em>Country List</em></strong></h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <Link href={`/country/${country.name.toLowerCase()}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
