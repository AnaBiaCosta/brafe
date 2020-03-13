import React, { useEffect, useState } from 'react'
import { Wrapper } from './BuyMenu.style'

const BuyMenu = ({ updatePokemon, handleUpdateBuyMenu }) => {

  const [name, setName] = useState('nome do pokemon')
  const [price, setPrice] = useState('P$ 0')
  const [src, setSrc] = useState('imagem')

  useEffect(() => {
    const pokemonData = JSON.parse(localStorage.getItem('pokemon'))

    if (pokemonData) {
      setName(pokemonData.name)
      setPrice(pokemonData.priceNew)
      setSrc(pokemonData.src)
      handleUpdateBuyMenu(false)
    }
  }, [updatePokemon, handleUpdateBuyMenu])

  return (
    <Wrapper>
      <h1>{name}</h1>
      <img alt="pokemon" src={src} />
      <p>{price}</p>
    </Wrapper>
  )
}

export default BuyMenu
