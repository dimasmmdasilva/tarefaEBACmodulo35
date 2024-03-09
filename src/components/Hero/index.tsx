import bannerImg from '../../assets/images/street_fighter_6.jpg'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>Luta</Tag>
        <Tag>Windows</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Street Fighter 6</h2>
        <p>
          <span>de R$ 299,00</span>
          por R$ 199,00
        </p>
        <Button
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
          type={'button'}
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
