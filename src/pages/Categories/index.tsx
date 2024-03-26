import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        background="black"
        title={'Ação'}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        background="gray"
        title={'Esportes'}
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={fightGames}
        background="black"
        title={'Luta'}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        background="gray"
        title={'RPG'}
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={simulationGames}
        background="black"
        title={'Simulação'}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
