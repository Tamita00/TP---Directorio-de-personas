import fs from 'fs';
import path from 'path';

export default async function Statistics() {
  const filePath = path.join(process.cwd(), 'src/app/data/Personas.json');
  const jsonData = fs.readFileSync(filePath);
  const personas = JSON.parse(jsonData);

  const over35 = personas.filter(person => person.edad > 35);
  const oldest = Math.max(...personas.map(person => person.edad));
  const youngest = Math.min(...personas.map(person => person.edad));
  const oldestPeople = personas.filter(person => person.edad === oldest);
  const youngestPeople = personas.filter(person => person.edad === youngest);

  return (
    <div>
      <h1>Statistics</h1>
      <p>Number of people over 35: {over35.length}</p>
      <p>Oldest person(s): {oldestPeople.map(person => `${person.nombre} ${person.apellido}`).join(', ')}</p>
      <p>Youngest person(s): {youngestPeople.map(person => `${person.nombre} ${person.apellido}`).join(', ')}</p>
    </div>
  );
}

