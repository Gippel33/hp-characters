import { useParams } from "react-router-dom";
import { useEffect } from "react";
import characters from "../data";
import "./OneCharacter.css";

const OneCharacter = () => {
  const { charID } = useParams();

  const oneCharacter = characters.find(
    (element) => String(element.id) === String(charID),
  );

  if (!oneCharacter) {
    return (
      <div className="one-char">
        <h1>Postava nenalezena</h1>
        <p>Je nám líto, ale postava s ID "{charID}" neexistuje.</p>
      </div>
    );
  }

  const { name, birth, image, group, description } = oneCharacter;

  return (
    <div className="one-char">
      <h1>{name}</h1>
      <p>{group}</p>
      <p className="description">{birth}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default OneCharacter;
