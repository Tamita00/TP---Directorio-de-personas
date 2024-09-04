import { useRouter } from 'next/router';
import Personas from '../../data/Personas';

export default function Person() {
  const router = useRouter();
  const { id } = router.query;
  const person = Personas.find(p => p.id === parseInt(id));

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
