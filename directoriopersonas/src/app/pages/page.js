import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';
import Personas from '../data/Personas';


export default function Home() {
  return (
      <div>
        <h1>Home Page</h1>
        <nav>
          <ul>
            <li><Link href="/statistics">Statistics</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <ul>
          {Personas.map(person => (
            <li key={person.id}>
              <Link href={`/person/${person.id}`}>{person.nombre} {person.apellido}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}


