import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList games={actionGames} background="black" title={'Ação'} />
        <ProductList games={sportGames} background="gray" title={'Esportes'} />
        <ProductList games={fightGames} background="black" title={'Luta'} />
        <ProductList games={rpgGames} background="gray" title={'RPG'} />
        <ProductList
          games={simulationGames}
          background="black"
          title={'Simulação'}
        />
      </>
    )
  }

  return <h4>Carregando. . .</h4>
}

export default Categories
