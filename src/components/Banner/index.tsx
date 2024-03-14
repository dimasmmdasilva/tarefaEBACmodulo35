import { useGetFeaturedGameQuery } from '../../services/api'
import { Imagem, Precos, Titulo } from './styles'
import { formataPreco } from '../ProductList'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            de <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button type="link" to={`/produto/${game.id}`} title="Clique aqui">
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
