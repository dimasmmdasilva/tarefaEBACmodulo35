/* eslint-disable react/display-name */
import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section =
  () =>
  ({ title, background, children }: Props) =>
    (
      <Container background={background}>
        <div>
          <Title>{title}</Title>
          {children}
        </div>
      </Container>
    )

export default Section
