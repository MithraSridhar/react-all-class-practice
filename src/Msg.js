import { Counter } from './Counter';

export function Msg({ name, picture }) {
  return (
    <div>
      <img className="profile-pic" src={picture} alt={name} />
      <h1>Hi {name}</h1>
      <Counter />
    </div>
  );
}
