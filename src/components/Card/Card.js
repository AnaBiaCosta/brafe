import React, { useState, useEffect} from 'react'
import { CardBody, Title, InfoContainer, Info, InfoBold, CardImg, Button } from './Card.style'


const Card = ({ name, src, type, price, handleUpdateBuyMenu}) => {
  
  const [priceNew, setPriceNew] = useState(0)
  const [captureNew, setCaptureNew] = useState(0)
  const [generationNew, setGenerationNew] = useState("")

  useEffect(() => {
    if(price <= 100){
      setPriceNew(10)
    }else if(price > 100 && price <= 200){
      setPriceNew(30)
    }else{
      setPriceNew(50)
    }
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then(res => {
      return res.json()
    }).then(res => {
      setCaptureNew(res.capture_rate)
      setGenerationNew(res.generation.name)

    })
  }, [])

  function transformGeneration( gen ){
    return gen.replace(/\w+-i/, "Primeira geração")
  }

  const saveCardData = () => {
    const pokemon = {name, src, priceNew}
    localStorage.setItem("pokemon", JSON.stringify(pokemon))
    handleUpdateBuyMenu(true)
  }

  const renderGeneration = () => {
    if(generationNew){
    return (
    <Info>
      <InfoBold>geração:</InfoBold> {generationNew}
    </Info>
  )}
  }

  return (
    <CardBody>
      <Title>{ name }</Title>
        <InfoContainer>
          <div>
            <Info>
              <InfoBold>tipo: </InfoBold>
              {type.map((elm) => {
                const { type } = elm
                return (
                  <span key={type.name}>{ type.name } </span>
                )
              })}
            </Info>
              {renderGeneration() }

            <Info>
              <InfoBold>taxa de captura:</InfoBold> {captureNew}
            </Info>
          </div>
          <CardImg src={src} />
        </InfoContainer>
            <Button onClick={() => saveCardData()}>P$ {priceNew}</Button>
    </CardBody>
  )
}

export default Card
