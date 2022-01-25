import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="ArthurEtNathalie">
      <Container>
        <Title>
          ArthurEtNathalie <Badge>2020</Badge>
        </Title>
        <P>
        A showcase website for a glasses store located in a charming city called Périgueux,
           it was made in 2020. I
          built it using wordpress. Got a traffic over 700
          users per day.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Wordpress</span>
          </ListItem>
          <ListItem>
            <Meta>Languages used</Meta>
            <span>HTML/CSS, Js</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Take a look at their website</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://arthuretnathalie.com">
              <Badge mr={2}>Their website</Badge>
              https://arthuretnathalie.com{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          <ListItem>
            <Link href="https://www.instagram.com/arthuretnathalieopticiens_pgx/">
              <Badge mr={2}>Their Instagram</Badge>
              @arthuretnathalieopticiens_pgx{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <WorkImage src="/images/works/arthur_owners.png" alt="Pichu*Pichu" />
        <WorkImage src="/images/works/arthur_glasses.png" alt="Pichu*Pichu" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'