import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          {' '}
          O Street Fighter 6 desenvolvido e publicado pela Capcom é um jogo de
          luta lançado em junho de 2023 ele representa a sétima entrada
          principal na franquia Street Fighter vamos explorar alguns aspectos
          desse emocionante título 1 Modos de Jogo - Fighting Ground Este modo
          oferece batalhas intensas onde os jogadores podem testar suas
          habilidades de luta em cenários variados - World Tour Os jogadores
          podem embarcar em uma jornada global enfrentando desafios e competindo
          em torneios - Battle Hub Aqui os jogadores podem se conectar com
          outros lutadores personalizar seus personagens e explorar o mundo do
          jogo 2 Recursos Inovadores - O Street Fighter 6 introduz novos
          recursos de jogabilidade que aprimoram a experiência de luta - Os
          visuais foram aprimorados em todos os aspectos do jogo proporcionando
          gráficos impressionantes 3 Vendas e Popularidade - O jogo já vendeu
          mais de 3 milhões de unidades em todo o mundo - A comunidade de
          jogadores está entusiasmada com as atualizações e eventos contínuos Em
          resumo o Street Fighter 6 é uma adição emocionante à série oferecendo
          aos fãs de luta uma experiência envolvente e cheia de adrenalina
          Prepare-se para enfrentar adversários formidáveis e mostrar suas
          habilidades no ringue 🥋🎮 Para mais informações você pode visitar o
          site oficial do Street Fighter 6{' '}
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b> Desenvolvedor: </b>Street Fighter 6 foi produzido pela Capcom e lançado em junho de 2023. <br />
          <b> Plataformas: </b>O jogo está disponível para as seguintes
          plataformas: PlayStation 5 Xbox Series X/S PC (Microsoft Windows){' '}
          <br />
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>Fotos...</div>
      </Section>
    </>
  )
}

export default Product
