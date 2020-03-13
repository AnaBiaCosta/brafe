import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import BuyMenu from '../components/BuyMenu'
import Card from '../components/Card'
import Footer from '../components/Footer'
import CardWrapper from '../components/CardWrapper';
import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper'

const App = () => {
  const [pokemons, setPokemons] = useState(null)
  const [updatePokemon, setUpdatePokemon] = useState(false)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        Promise.all(res.results.map(pokemonsObj => {
          return fetch(pokemonsObj.url)
            .then((pokemonsUrl) => pokemonsUrl.json())
        })).then((valuePokemonsUrl) => {
          setPokemons(valuePokemonsUrl)
        })
      })
  }, [])

  return (
      <Layout>
        <Navbar />
        <Main>
          <BuyMenu updatePokemon={updatePokemon} handleUpdateBuyMenu={setUpdatePokemon}/>
          <Wrapper>
            <PageTitle text="poke store" />
            <CardWrapper>
              {pokemons && pokemons.map( item => (
                <Card 
                  key={item && item.name}
                  name={item && item.name}
                  type={item.types}
                  price={item.base_experience}
                  src={item.sprites.front_default}
                  generation={'geracao'}
                  capture={'capture'}
                  handleUpdateBuyMenu={setUpdatePokemon}
                />
              ))}
            </CardWrapper>
          </Wrapper>
        </Main>
        <Footer />
      </Layout>
  )
}

export default App;
