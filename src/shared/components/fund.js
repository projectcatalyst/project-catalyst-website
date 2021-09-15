import { useMemo } from 'react'
import styled from 'styled-components'

import Box, { Row, Column } from './box'
import Line from './line'
import Text from './text'
import DateHelper from '../functions/date'
import Icon from './font-icon'

const formatCurrency = (amount, currency) => {
  if (currency === 'USD') return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount)
  if (currency === 'ADA') return `₳ ${Number(amount).toLocaleString()}`
  return `${currency}${Number(amount).toLocaleString()}`
}

const Fund = ({ fund, status, statusColor, stagesMap, challengesMap }) => {
  const currentDate = new Date().toISOString()

  const hasChallenges = useMemo(() => !!fund.challenges && fund.challenges.length > 0, [fund])
  return (
    <Container p={{ _: '10px', sm: '15px' }} mx={{ _: '5px', sm: '20px' }}>
      <Row justifyContent='space-between' alignItems='center'>
        <Row my='10px' alignItems='center'>
          <Text variant='text' mr='15px'>{ fund.name }</Text>
          <StatusContainer mb='1px' backgroundColor={statusColor}>
            <Text variant='text' color='white'>{ status }</Text>
          </StatusContainer>
        </Row>
        <Row my='10px'>
           { !!fund.totalAvailable &&
             <Text>{ `${formatCurrency(fund.totalAvailable, fund.totalAvailableCurrency)}` }</Text>
           }
        </Row>
      </Row>

      <Line mt='10px' color='grey30' />

      <Row flexWrap='wrap'>
        <Column width={{ _: '100%', md: '48%' }} minWidth={{ _: 'auto', md: '500px' }}>
          <Row mt='20px'>
            <Text bold minWidth={{ _: '100px', sm: '180px', md: '240px' }} flex={{ _: 0, sm: 0 }} variant='textSmall'>
              Stage
            </Text>
            <Row px='6px' flex={{ _: 1, sm: 0 }} justifyContent='flex-end'>
              <Text bold display={{ _: 'block', sm: 'block' }} minWidth={{ _: '80px', md: '110px' }} variant='textSmall'>
                Start
              </Text>
              <Text bold display={{ _: 'block', sm: 'block' }} minWidth={{ _: '80px', md: '110px' }} variant='textSmall'>
                Finish
              </Text>
              <Box minWidth='18px' />
            </Row>
          </Row>
          <Column mt='5px' mb='10px'>
            { !!fund.stages && fund.stages.map(stage => {
              const startAt = new DateHelper(stagesMap[stage]?.startAt)
              const finishAt = new DateHelper(stagesMap[stage]?.finishAt)

              const completed = status === 'Active' && startAt.isBefore(currentDate) && finishAt.isBefore(currentDate)
              const active = startAt.isBefore(currentDate) && finishAt.isSameOrAfter(currentDate)
              return (
                <StageContainer flexWrap={{ _: 'wrap', md: 'nowrap' }}>
                  <Text minWidth={{ _: '100px', sm: '180px', md: '240px' }} flex={{ _: 1, sm: 0 }} variant='textSmall' {...{active}}>
                    { stagesMap[stage]?.name}
                  </Text>
                  <Row flex={{ _: 1, sm: 0 }} justifyContent='flex-end'>
                    <StageRow {...{active}} mt={{ _: '2px', sm: '0px' }} justifyContent={{ _: 'flex-end', sm: 'flex-start' }}>
                      <Row justifyContent='flex-start' alignItems='center'>
                        <Column>
                          <StageText variant='textSmall' minWidth={{ _:'80px', md: '110px' }} {...{active}}>
                            { startAt.format('D MMM, ha') }
                          </StageText>
                        </Column>
                        <Column>
                          <StageText variant='textSmall' minWidth={{ _:'80px', md: '110px' }} {...{active}}>
                            { finishAt.format('D MMM, ha') }
                          </StageText>
                        </Column>
                      </Row>
                      <Row minWidth='18px' justifyContent='flex-end'>
                        { active && <Icon icon='clock' iconSize='18px' color='white' /> }
                        { completed && <Icon icon='check' iconSize='18px' color='primary' /> }
                      </Row>
                    </StageRow>
                  </Row>
                </StageContainer>
              )
            }) }
          </Column>
        </Column>
        { !!hasChallenges && <Box display={{ _: 'none', md: 'block' }} width='20px' /> }
        { !!hasChallenges &&
          <Column mt='20px' mb='10px' maxWidth='100%' minWidth='250px' flex={1}>
            <Text variant='textSmall' bold>
              Challenges
            </Text>
            <Column>
              { fund.challenges.map(challengeId => {
                const challenge = challengesMap[challengeId]
                return (
                  <ChallengeContainer>
                    <Row justifyContent='space-between'>
                      <Text variant='textSmall' bold>
                        { challenge.name }
                      </Text>
                      <Text ml='10px' variant='text'>
                        { `${formatCurrency(challenge.amountAvailable, challenge.currency)}` }
                      </Text>
                    </Row>
                    <Text mt='12px' variant='textSmall'>
                      { challenge.description }
                    </Text>
                  </ChallengeContainer>
                )
              }) }
            </Column>
          </Column>
        }
      </Row>
    </Container>
  )
}

const Container = styled(Column)(
  ({ theme }) => ({
    borderColor: theme.colors.grey30,
    borderRadius: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    marginTop: '10px',
    marginBottom: '10px'
  })
)

const StageContainer = styled(Row)({
  marginTop: '2px',
  alignItems: 'center',
  marginBottom: '2px',
  justifyContent: 'flex-start'
})

const StageRow = styled(Row)(
  ({ theme, active }) => ({
    padding: '3px 7px 3px 7px',
    alignItems: 'center',
    borderRadius: '20px',
    maxHeight: '24px',
    backgroundColor: active ? theme.colors.greenDark : 'transparent'
  })
)

const StatusContainer = styled(Box)(
  ({ theme, backgroundColor }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors[backgroundColor] || theme.colors.grey30,
    padding: '0px 8px 0px 8px',
    borderRadius: '20px'
  })
)

const StageText = styled(Text)(
  ({ active, theme, }) => ({
    color: active ? theme.colors.white : theme.colors.black,
    fontWeight: active ? '600' : '400'
  })
)

const ChallengeContainer = styled(Column)(
  ({ theme }) => ({
    marginTop: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.colors.grey30,
    borderRadius: '5px',
    padding: '8px'
  })
)

export default Fund