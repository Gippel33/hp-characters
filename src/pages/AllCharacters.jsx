import React, { useState } from "react";
import characters from "../data";
import { Link } from "react-router-dom";
import "./AllCharacters.css";

const AllCharacters = () => {
  const [selectedGroup, setSelectedGroup] = useState("Vše");

  const getGroupClass = (groupName) => {
    switch (groupName) {
      case "Fénixův řád":
        return "fenix-order";
      case "Černokněžník":
        return "dark-wizard";
      case "Brumbálova armáda":
        return "dumbledore-army";
      default:
        return "unknown-group";
    }
  };

  const filteredCharacters =
    selectedGroup === "Vše"
      ? characters
      : characters.filter((char) => char.group === selectedGroup);

  return (
    <section className="all-characters">
      <div className="filter">
        <h2>FILTR DLE SKUPINY</h2>
        <div className="filter-buttons">
          <button
            onClick={() => setSelectedGroup("Vše")}
            className="filter-btn"
          >
            Vše
          </button>
          <button
            onClick={() => setSelectedGroup("Fénixův řád")}
            className="filter-btn fenix-order"
          >
            Fénixův řád
          </button>
          <button
            onClick={() => setSelectedGroup("Černokněžník")}
            className="filter-btn dark-wizard"
          >
            Černokněžník
          </button>
          <button
            onClick={() => setSelectedGroup("Brumbálova armáda")}
            className="filter-btn dumbledore-army"
          >
            Brumbálova armáda
          </button>
        </div>
      </div>

      <div className="character-grid">
        {filteredCharacters.map((oneChar) => {
          const { id, name, image, group } = oneChar;

          return (
            <div className={`one-character ${getGroupClass(group)}`} key={id}>
              <h2>{name}</h2>
              <p>{group}</p>
              <img src={image} alt={name} />
              <Link to={`/onecharacter/${id}`}>Více informací</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllCharacters;
