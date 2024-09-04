import fs from 'fs';
import path from 'path';

export default async function Person({ params }) {
  const filePath = path.join(process.cwd(), 'src/data/personas.json');
  const jsonData = fs.readFileSync(filePath);
  const personas = JSON.parse(jsonData);
  const person = personas.find(p => p.id === parseInt(params.id));

  if (!person) return <p>Person not found</p>;

  return (
    <div>
      <h1>Person Details</h1>
      <p>Nombre: {person.nombre}</p>
      <p>Apellido: {person.apellido}</p>
      <p>Email: {person.email}</p>
      <p>Edad: {person.edad}</p>
    </div>
  );
}
