import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src/app/data/Personas.json');
  const jsonData = fs.readFileSync(filePath);
  const personas = JSON.parse(jsonData);

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link href="src/app/pages/statistics.js">Statistics</Link></li>
          <li><Link href="src/app/pages/statistics.js">Contact</Link></li>
        </ul>
      </nav>
      <ul>
        {personas.map(person => (
          <li key={person.id}>
            <Link href={`src/app/pages/person/${person.id}`}>{person.nombre} {person.apellido}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
