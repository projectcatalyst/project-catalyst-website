import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Form, { Input, Checkbox, AddCheckbox } from '../shared/components/form'
import Line from '../shared/components/line'
import { Column, Row } from '../shared/components/box'
import Text, { Title } from '../shared/components/text'
import Icon from '../shared/components/font-icon'
import Button from '../shared/components/button'
import { LinkedInHelp, GithubHelp, TwitterHelp, DiscordHelp, TelegramHelp } from './help-modals'

const UpdateProfile = ({
  defaultValues, checkUsername, loading, me, categories, servicesMap, skillsMap, formError, onSubmit
}) => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues
  })

  const handleUsername = username => username.trim()
  const handleLinkedIn = username => username.trim()
  const handleGithub = username => username.trim()
  const handleTwitter = username => username.trim()
  const handleDiscord = username => username.trim()
  const handleTelegram = username => username.trim()

  const handleCheckUsername = async username =>
    checkUsername({ variables: { username } })
  
  return (
    <Form id='onboardingForm' onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '50px', alignItems: 'flex-start' }}>
      <Title mt='20px'>
        Update profile
      </Title>

      <Input
        mt='40px'
        name='username'
        label='Username'
        control={control}
        onChange={handleUsername}
        rules={{
          maxLength: 20,
          required: true,
          validate: {
            validUsername: async username => {
              if (me?.username === username) return true

              if (!username.match(/^[0-9a-z-]+$/)) 
                return 'Username can only use numbers, lower case letters and hyphens'

              return handleCheckUsername(username)
                .then(response => response.data.checkUsername)
                .catch(error => error.message)
            }
          }
        }}
        placeholder='Username'
        width={{ _: '280px', sm: '320px', md: '400px' }}
      />

      <Title mt='50px'>
        Accounts
      </Title>
      
      <Text mt='10px'>
        Add your username from atleast one account from either LinkedIn, Discord or Telegram so the community has a way to contact you.
      </Text>

      <Row mt='40px' alignItems='center'>
        <Icon icon='linkedin' iconSize='20px' color='primary' />
        <Title variant='text' ml='10px' mr='10px'>
          LinkedIn
        </Title>
        <LinkedInHelp />
      </Row>
      <Row mt='10px' alignItems='center' width='100%' justifyContent='space-between' maxWidth='360px'>
        <Text mr='5px' textAlign='right' width={{ _: '115px', sm: '135px' }}>
          linkedin.com/in/
        </Text>
        <Input
          name='accountLinkedIn'
          control={control}
          onChange={handleLinkedIn}
          showErrors={true}
          rules={{
            maxLength: 25,
            validate: {
              validUsername: async username => {
                if (!username) return null
                if (!username.match(/^[a-zA-Z0-9-]{5,30}$/i)) return 'Username not valid'
                return null
              }
            }
          }}
          placeholder='username'
          width={{ _: '150px', sm: '230px' }}
        />
      </Row>

      <Row mt='40px'>
        <Icon icon='github' iconSize='20px' color='primary' />
        <Title variant='text' ml='10px' mr='10px'>
          Github
        </Title>
        <GithubHelp />
      </Row>
      <Row mt='10px' alignItems='center' width='100%' justifyContent='space-between' maxWidth='360px'>
        <Text mr='5px' textAlign='right' width={{ _: '115px', sm: '135px' }}>
          github.com/
        </Text>
        <Input
          name='accountGithub'
          control={control}
          onChange={handleGithub}
          showErrors={true}
          rules={{
            maxLength: 40,
            validate: {
              validUsername: async username => {
                if (username && !username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) return 'Username not valid'
                return null
              }
            }
          }}
          placeholder='username'
          width={{ _: '150px', sm: '230px' }}
        />
      </Row>

      <Row mt='40px' >
        <Icon icon='twitter' iconSize='20px' color='primary' />
        <Title variant='text' ml='10px' mr='10px'>
          Twitter
        </Title>
        <TwitterHelp />
      </Row>
      <Row mt='10px' alignItems='center' width='100%' justifyContent='space-between' maxWidth='360px'>
        <Text mr='5px' textAlign='right' width={{ _: '115px', sm: '135px' }}>
          twitter.com/
        </Text>
        <Input
          name='accountTwitter'
          control={control}
          onChange={handleTwitter}
          showErrors={true}
          rules={{
            maxLength: 25,
            validate: {
              validUsername: async username => {
                if (username && username.includes('@')) return `Remove the '@' from your username`
                if (username && !username.match(/^[A-Za-z0-9_]{1,15}$/)) return 'Username not valid'
                return null
              }
            }
          }}
          placeholder='username'
          width={{ _: '150px', sm: '230px' }}
        />
      </Row>

      <Row mt='40px'>
        <Icon icon='discord' iconSize='20px' color='primary' />
        <Title variant='text' ml='10px' mr='10px'>
          Discord
        </Title>
        <DiscordHelp />
      </Row>
      <Row mt='10px' alignItems='center' width='100%' justifyContent='space-between' maxWidth='360px'>
        <Text mr='5px' textAlign='right' width={{ _: '115px', sm: '135px' }}>
          Username: 
        </Text>
        <Input
          name='accountDiscord'
          control={control}
          onChange={handleDiscord}
          showErrors={true}
          rules={{
            maxLength: 40,
            validate: {
              validUsername: async username => {
                if (username && !username.match(/^.{3,32}#[0-9]{4}$/)) return 'Username not valid'
                return null
              }
            }
          }}
          placeholder='username'
          width={{ _: '150px', sm: '230px' }}
        />
      </Row>

      <Row mt='40px'>
        <Icon icon='telegram' iconSize='20px' color='primary' />
        <Title variant='text' ml='10px' mr='10px'>
          Telegram
        </Title>
        <TelegramHelp />
      </Row>
      <Row mt='10px' alignItems='center' width='100%' justifyContent='space-between' maxWidth='360px'>
        <Text mr='5px' textAlign='right' width={{ _: '115px', sm: '135px' }}>
          t.me/ 
        </Text>
        <Input
          name='accountTelegram'
          control={control}
          onChange={handleTelegram}
          showErrors={true}
          rules={{
            maxLength: 32,
            validate: {
              validUsername: async username => {
                if (username && !username.match(/^[a-z0-9_-]{5,32}$/i)) return 'Username not valid'
                return null
              }
            }
          }}
          placeholder='username'
          width={{ _: '150px', sm: '230px' }}
        />
      </Row>

      <Title mt='50px'>
        Community roles
      </Title>
      <Text mt='10px'>
        What roles have you had in the community?
      </Text>

      <Checkbox
        ml={{ _: '10px', sm: '25px' }}
        mt='40px'
        name='roleCommunityAdvisor'
        label='Community advisor - Have been a community advisor that reviews Catalyst proposals'
        control={control}
      />

      <Checkbox
        ml={{ _: '10px', sm: '25px' }}
        mt='30px'
        name='roleStakePoolOperator'
        label='Stake pool operator - Currently operate or have experience in running a Cardano stake pool'
        control={control}
      />

      <Title mt='50px'>
        Community participation
      </Title>
      <Text mt='10px'>
        How are you looking to participate?
      </Text>

      <Checkbox
        ml={{ _: '10px', sm: '25px' }}
        mt='30px'
        name='availableForCollaboration'
        label='Available for collaboration - Available to help work on new or existing Cataylst proposals'
        control={control}
      />

      <Title mt='60px'>
        Services
      </Title>
      <Text my='10px'>
        Which of the following services can you offer?
      </Text>

      <Column flexWrap='wrap' flex={1} width='100%' alignItems='flex-start' maxHeight={{ _: 'auto', lg: '1000px' }}>
        { !!categories && categories.map(category => 
          <ExpertiseContainer key={`services-${category.id}`}>
            <Text m='5px' mb='10px'>
              { category.name }
            </Text>
            <Row mt='5px' flexWrap='wrap'>
              { category.services.map(service =>
                <AddCheckbox
                  key={`service-${service.id}`}
                  m='5px'
                  name={`service-${service.id}`}
                  label={servicesMap[service.id].name}
                  control={control}
                />
              ) }
            </Row>
          </ExpertiseContainer>
        ) }
      </Column>

      <Title mt='60px'>
        Skills
      </Title>
      <Text mt='10px'>
        Which of the following skills do you have?
      </Text>

      <Column flexWrap='wrap' width='100%' mb='30px' alignItems='flex-start' maxHeight={{ _: 'auto', lg: '800px' }}>
        { !!categories && categories.map(category => {
          if (!category.skills.length) return null
          return (
            <ExpertiseContainer key={`skills-${category.id}`}>
              <Text m='5px' mb='10px'>
                { category.name }
              </Text>
              <Row mt='5px' flexWrap='wrap'>
                { category.skills.map(skill =>
                  <AddCheckbox
                    key={`skill-${skill.id}`}
                    m='5px'
                    name={`skill-${skill.id}`}
                    label={skillsMap[skill.id].name}
                    control={control}
                  />
                ) }
              </Row>
            </ExpertiseContainer>
          )
        }) }
      </Column>

      { !!formError && 
        <Text width='100%' textAlign='right' color='red50'>
          { formError }
        </Text>
      }

      <Line mt='20px' />

      <Row alignItems='center' justifyContent='flex-end' width='100%'>
        <Button minWidth={{ _: '175px', sm: '200px' }} mt='20px' type='submit' loading={loading}>
          Update profile
        </Button>
      </Row>
    </Form>
  )
}

const ExpertiseContainer = styled(Column)(
  ({ theme }) => ({
    display: 'block',
    marginTop: '20px',
    width: '100%',
    maxWidth: '400px',
    minHeight: '100px',
    padding: '12px',
    borderStyle: 'solid',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: theme.colors.grey30,
    borderWidth: '1px',
    borderRadius: '10px'
  })
)

export default UpdateProfile
