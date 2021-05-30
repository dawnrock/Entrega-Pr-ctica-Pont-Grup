import React from 'react';
import CharacterTable from '../components/characterTable';

export const CharacterContainer = (props) => {
    const { character } = props;

    return (
      <CharacterTable>

        <CharacterTable.Logo src={character.image} style={{}} />
        <CharacterTable.Title>Nombre: {character.name}</CharacterTable.Title>
        <CharacterTable.Title>Status: {character.status}</CharacterTable.Title>
        <CharacterTable.Title>Specie: {character.species}</CharacterTable.Title>
        <CharacterTable.Title>Género: {character.gender}</CharacterTable.Title>

      </CharacterTable>

  )
};
