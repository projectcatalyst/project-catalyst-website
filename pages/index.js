import dynamic from 'next/dynamic'
import Image from 'next/image'

import Box, { Column, Row } from '../src/shared/components/box'
import HTMLHead from '../src/shared/components/html-head'
import PageHeader from '../src/shared/components/header'
import Text from '../src/shared/components/text'
import Link from '../src/shared/components/link'
import WarningMessage from '../src/shared/components/warning-message'
import Button from '../src/shared/components/button'

const CatalystEcosystem = dynamic(() => import('../src/homepage/catalyst-ecosystem'))
const PageFooter = dynamic(() => import('../src/shared/components/footer'))

const Homepage = () =>
  <Column width='100%'>
    <HTMLHead
      title='Project Catalyst Community Site'
      description={`The Project Catalyst community site for finding resources, learning and getting involved in Cardano's governance ecosystem. The Project Catalyst community site has a community list, resources and all of the proposal and funding information from each funding round.`}
    />
    <PageHeader />

    <Column minHeight='64vh' width='100%' alignItems='center' alignSelf='center' pb='30px'>

      <Row mt='20px' maxWidth='1200px' px={{ _: '10px', sm: '30px' }} flexWrap='wrap'>
        <Box mt='30px' width={{ _: '260px', md: '440px' }} display='block' mx={{ _: '20px', md: '40px'}}>
          <Image src='/catalyst-cover.png' alt='Catalyst ideas' width='345px' height='259px' layout='responsive' />
        </Box>

        <Column ml={{ _: '20px', md: '40px' }} maxWidth={{ _: '260px', sm: '300px', md: '400px', lg: '500px' }} mt='30px'>
          <Text variant='headerSmall'>
            Project Catalyst
          </Text>

          <Text mt={{ _: '15px', md: '30px' }}>
            Project Catalyst is a series of experiments which seeks to generate the highest levels of community innovation. Catalyst is bringing on-chain governance to the Cardano blockchain by allowing the community to self-determine priorities for growth.
          </Text>

          <WarningMessage mt='30px'>
            Please note - This site is run by the community and not by IOG
          </WarningMessage>
        </Column>
      </Row>

      <Row width='100%' mt='100px' justifyContent='center' backgroundColor='primary' py='80px'>
        <Row maxWidth='1200px' width='100%' justifyContent='space-between' alignItems='center' mx='30px' flexWrap='wrap'>

          <Column mx={{ _: '10px', sm: '20px' }} mb={{ _: 0, sm: '20px' }}>
            <Text variant='headerSmall' mt='30px' color='white'>
              New to Project Catalyst?
            </Text>

            <Text mt='20px' color='white' maxWidth='600px'>
              Learn about Project Catalyst using both IOG official and community made resources. 
            </Text>

            <Column mt='20px' width='100%' maxWidth={{ _: '280px', md: '420px' }}>
              <Link href='/resources/what-is-project-catalyst' maxWidth={{ _: '280px', md: '420px' }}>
                <Button variant='outlined' my='10px' width={{ _: '280px', md: '420px' }}>
                  What is Project Catalyst?
                </Button>
              </Link>
              <Row width='100%' justifyContent='space-between'>
                <Link href='/resources/glossary'>               
                  <Button variant='outlined' minWidth={{ _: '130px', md: '200px' }} my='10px'>
                    Glossary
                  </Button>
                </Link>
                <Link href='/resources'>
                  <Button variant='outlined' minWidth={{ _: '130px', md: '200px' }} my='10px'>
                    Resources
                  </Button>
                </Link>
              </Row>
            </Column>
          </Column>

          <Box mb='20px' mt={{ _: '30px', md: '10px' }} width={{ _: '260px', md: '440px'}} display='block' mx='20px'>
            <Image src='/catalyst-map.png' alt='Catalyst ideas' width='345px' height='259px' layout='responsive' />
          </Box>
        </Row>
      </Row>

      <CatalystEcosystem />

    </Column>

    <PageFooter />
  </Column>

export default Homepage