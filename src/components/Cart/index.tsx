import Button from '../Button'
import Tag from '../Tag'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Quantity,
  Prices,
  CartItem
} from './styles'

const Cart = () => {
  ;<CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          {/* <img src={caminhoDaImagem} /> */}
          <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 299,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>1 jogo no carrinho</Quantity>
      <Prices>
        Total de R$ 299,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compre" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
}

export default Cart
