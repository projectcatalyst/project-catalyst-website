import React from 'react'
import { getProviders, signIn, getSession } from 'next-auth/client'

import { Column, Row } from '../src/shared/components/box'
import HTMLHead from '../src/shared/components/html-head'
import Icon from '../src/shared/components/font-icon'
import Button from '../src/shared/components/button'
import Text from '../src/shared/components/text'
import touchableIcon from '../src/shared/functions/touchable-icon'
import NavigationLink from '../src/shared/components/navigation-link'
import CatalystTitle from '../src/shared/svg/catalyst-title.svg'

const CatalystTitleIcon = touchableIcon(CatalystTitle)

const Login = ({ providers }) => {
  return (
    <Column width='100%'>
      <HTMLHead
        title='Login'
        description='Project Catalyst community site login page. Join the Project Catalyst community site.'
      />

      <Column maxWidth='1200px' height='100%' width='100%' justifyContent='center' alignItems='center' alignSelf='center' py='30px' px='20px'>

        <NavigationLink href='/'>
          <CatalystTitleIcon
            height='39px'
            width='142px'
          />
        </NavigationLink>

        <Column maxWidth='500px' mt='40px' p='20px' borderColor='orange' borderWidth='1px' borderStyle='solid' borderRadius='10px'>
          <Row alignSelf='center'>
            <Icon icon='important' iconSize='20px' color='orange' />
            <Text ml='10px' bold maxWidth='800px' center>
              Warning - Avoid scams
            </Text>
          </Row>
          <Text mt='20px'>
            This is a public website run by the community. Anyone can sign up to this website. Do not send money or personal information to anyone you meet through this website. If you see any suspicious profiles or behaviour please reach out to a community member through our Discord link.
          </Text>
        </Column>

        <Column mt='30px' alignItems='center'>
          { Object.values(providers).map(provider => 
            <div key={provider.name}>
              <Button onClick={() => signIn(provider.id)} mt='20px' minWidth='300px' variant='outlined'>
                <Row justifyContent='center' alignItems='center'>
                  <Icon ml='10px' icon={provider.id} iconSize='20px' color='primary' />
                  <Text ml='10px' width='170px'>{ `Login with ${provider.name}` }</Text>
                </Row>
              </Button>
            </div>
          ) }
          <Text mt='50px' maxWidth='400px' center>
            No account linking - We currently do not support account linking. Use the same online account each time you login.
          </Text>

        </Column>
      </Column>
    </Column>
  )
}

export async function getServerSideProps(context){
  const session = await getSession({ req: context.req })
  const providers = await getProviders()

  // Homepage redirect
  if (session && session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      providers
    }
  }
}

export default Login
