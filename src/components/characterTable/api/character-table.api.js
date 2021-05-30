import React from "react";
import { CharacterContainer } from '../../../containers/characters';
import { useDebounce } from 'use-debounce';
import CharacterTable from '../../characterTable/index';


export default function CharacterTableComponent() {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 1000)
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${filter}`)
      .then((response) => {
        if (!response.ok) {
          throw ('La liaste Burt Lancaster')
        }
        return response.json()
      })
      .then((json) => setCharacters(json.results ? json.results : [])
      );
  }, [debouncedFilter]);

  return (
    <>
      <CharacterTable>
        <CharacterTable.Wrapper>
          <CharacterTable.InputDiv>
            <CharacterTable.InputTitle>
              Escribe para buscar un personaje.
            </CharacterTable.InputTitle>
            <CharacterTable.Input value={filter} onChange={(e) => setFilter(e.target.value)} />

          </CharacterTable.InputDiv>


          <CharacterTable.Row>

            {characters.map((character) => (
              <CharacterContainer key={character.name} character={character} />
            ))}

          </CharacterTable.Row>

        </CharacterTable.Wrapper>
      </CharacterTable>


    </>
  );
};


