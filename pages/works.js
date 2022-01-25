import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/arthur.png'
import thumbWalknote from '../public/images/works/feeling.png'
import thumbFourPainters from '../public/images/works/jungle.png'
import thumbMenkiki from '../public/images/works/garage.png'
import thumbModeTokyo from '../public/images/works/yuri.jpeg'
import thumbStyly from '../public/images/works/mingyue.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="arthur" title="Arthur et Nathalie" thumbnail={thumbInkdrop}>
            A website designed for a super kind and joyful glasses seller called Arthur 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="feelling"
            title="FeelLing"
            thumbnail={thumbWalknote}
          >
            A website for the best cantonese restaurant of Paris (They're the best) 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="jungleworks"
            title="JungleWorks "
            thumbnail={thumbFourPainters}
          >
            We developed a new billing system together
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
           id="garage" thumbnail={thumbMenkiki} 
           title="Le Garage">
            An app allowing customers to renew their subscriptions 
            and to give them access to the gym using a Qr Code
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="yuri"
            thumbnail={thumbModeTokyo}
            title="Yuri Artiukh"
          >
            Worked together on more three.js projects together than I can remember
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="mingyue" thumbnail={thumbStyly} title="Mingyue">
            A 3D artist that also happens to be a polyglot. We both share a passion for 奶茶
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
