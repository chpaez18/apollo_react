import React from 'react';
import {useQuery, gql} from '@apollo/client'; //gql es el modulo que parsea todas las querys de manera legible



//creamos una funcion de flecha
const CharactersQuery = () => {

    /*
    podemos definir tambien una constante que tendra el query en especifico que queremos, y luego pasarsela al hook useQuery mas adelante 
        const characters = gql `
            {
            characters {
                results{
                    id
                    name
                    status
                }
            }
            }
        `
        const { loading, error, data } = useQuery(characters);
    */
    //definimos una constante para usar el hook useQuery al cual le pasaremos el query en graphql, esto nos retornara loading, error y la data
    const { loading, error, data } = useQuery(gql `
    {
      characters {
          results{
              id
              name
              status
          }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  //por ultimo solo pintamos la informacion
    return (
        data.characters.results.map(character => (
            <div>
            <p>
                {character.name} : {character.status}
            </p>
            </div>
        ))
    );
}
 
export default CharactersQuery;