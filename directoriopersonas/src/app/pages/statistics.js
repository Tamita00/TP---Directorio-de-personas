import Personas from '../data/Personas';

export default function Statistics() {
  const over35 = Personas.filter(person => person.edad > 35);
  const oldest = Math.max(...Personas.map(person => person.edad));
  const youngest = Math.min(...Personas.map(person => person.edad));
  const oldestPeople = Personas.filter(person => person.edad === oldest);
  const youngestPeople = Personas.filter(person => person.edad === youngest);

  return (
    <div>
      <h1>Statistics</h1>
      <p>Number of people over 35: {over35.length}</p>
      <p>Oldest person(s): {oldestPeople.map(person => `${person.nombre} ${person.apellido}`).join(', ')}</p>
      <p>Youngest person(s): {youngestPeople.map(person => `${person.nombre} ${person.apellido}`).join(', ')}</p>
    </div>
  );
}
