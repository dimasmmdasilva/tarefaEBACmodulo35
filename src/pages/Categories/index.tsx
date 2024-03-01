import ProductList from '../../components/ProductList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description: 'Diablo IV',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 1,
    category: 'RPG',
    description: 'Diablo IV',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 1,
    category: 'RPG',
    description: 'Diablo IV',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 1,
    category: 'RPG',
    description: 'Diablo IV',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} background="gray" title={'Promoções'} />
    <ProductList games={emBreve} background="black" title={'Em breve'} />
    <ProductList games={promocoes} background="gray" title={'Promoções'} />
    <ProductList games={emBreve} background="black" title={'Em breve'} />
  </>
)

export default Categories
