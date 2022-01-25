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
    <Layout title="FeelLing">
      <Container>
        <Title>
          FeelLing <Badge>2021</Badge>
        </Title>
        <P>
          A showcase website for a cantonese/thai restaurant in Paris, made in 2021. I
          built it using wordpress and integrated a pick and collect solution (inactive now). Got a traffic over 2,000
          users per day.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Wordpress</span>
          </ListItem>
          <ListItem>
            <Meta>Languages used</Meta>
            <span>PHP, jQuery, MySQL, Js</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Take a look at their website</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://feel-ling.fr">
              <Badge mr={2}>Their website</Badge>
              https://feel-ling.fr{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          <ListItem>
            <Link href="https://www.instagram.com/kitchen.feelling/">
              <Badge mr={2}>Their Instagram</Badge>
              @kitchen.feeling{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <WorkImage src="/images/works/feelling_sophie.png" alt="Pichu*Pichu" />
        <WorkImage src="/images/works/feelling_dish.png" alt="Pichu*Pichu" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'