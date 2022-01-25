import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="mode.tokyo">
      <Container>
        <Title>
          Yuri Artiukh <Badge>We met in 2019</Badge>
        </Title>
        <P>He is a very talented CSS artist, CEO of coderiver</P>
        <P>
          You can find one of his conference at{' '}
          <Link href="https://www.youtube.com/watch?v=tL6XifRPAvc" target="_blank">
          VinnytsiaJS 2021 <ExternalLinkIcon mx="2px" />
          </Link>
          He is a Creative web developer from Kyiv, Ukraine, interested in Math as a language of expression. Geometry, abstractions, nature.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>JavaScript, </span>
            <span>Css, </span>
            <span>Glsl</span>
          </ListItem>
          <ListItem>
            <Meta>He is Teaching at</Meta>
            <Link href="https://www.awwwards.com/coderiver/">
              He is providing some classes about trending webdesign technologies, as Three.js or Pixi.js{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>His articles</Meta>
            <Link href="https://medium.com/@akella">
              He wrote some articles about the technologies he uses{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/yuri_mind.png" alt="yuri" />
        <WorkImage src="/images/works/yuri_art.png" alt="yuri" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  