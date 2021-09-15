import { useMemo, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Box, { Column } from '../../src/shared/components/box'
import HTMLHead from '../../src/shared/components/html-head'
import PageHeader from '../../src/shared/components/header'
import PageFooter from '../../src/shared/components/footer'
import Loading from '../../src/shared/components/loading'
import UpdateForm from '../../src/profile/update-form'

import ME_QUERY from '../../src/shared/gql/me'
import PROFESSIONAL_QUERY from '../../src/shared/gql/professional-data'
import CHECK_USERNAME_MUTATION from '../../src/shared/gql/check-username'
import UPDATE_USER_MUTATION from '../../src/shared/gql/update-user'

const UpdateProfile = () => {
  const router = useRouter()
  const { data: professionalData, loading: professionalLoading } = useQuery(PROFESSIONAL_QUERY)
  const { data: userData, loading: userLoading } = useQuery(ME_QUERY)

  const [updateUser] = useMutation(UPDATE_USER_MUTATION)
  const [checkUsername] = useMutation(CHECK_USERNAME_MUTATION)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const initialLoading = useMemo(() => (professionalLoading || userLoading) && !professionalData, [professionalData, professionalLoading, userLoading])

  const services = useMemo(() => professionalData?.services || null, [professionalData])
  const skills = useMemo(() => professionalData?.skills || null, [professionalData])
  const categories = useMemo(() => professionalData?.categories || null, [professionalData])
  const me = useMemo(() => userData?.me || null, [userData])

  const userServicesMap = useMemo(() => me?.services
    ? me.services.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
    : null
  )

  const userSkillsMap = useMemo(() => me?.skills
    ? me.skills.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
    : null
  )

  const servicesMap = useMemo(() => services
    ? services.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
    : null
  )

  const skillsMap = useMemo(() => skills
    ? skills.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
    : null
  )

  const defaultValues = useMemo(() => ({
    username: me?.username,
    roleCommunityAdvisor: me?.roleCommunityAdvisor || undefined,
    roleStakePoolOperator: me?.roleStakePoolOperator || undefined,
    availableForCollaboration: me?.availableForCollaboration || undefined,
    accountLinkedIn: me?.accountLinkedIn || undefined,
    accountGithub: me?.accountGithub || undefined,
    accountTwitter: me?.accountTwitter || undefined,
    accountDiscord: me?.accountDiscord || undefined,
    accountTelegram: me?.accountTelegram || undefined,
    ... !!services && !!me && services?.reduce((acc, { id }) => ({ ...acc, [`service-${id}`]: !!userServicesMap[id] }), {}),
    ... !!skills && !!me && skills?.reduce((acc, { id }) => ({ ...acc, [`skill-${id}`]: !!userSkillsMap[id] }), {})
  }), [me, services, skills, userServicesMap, userSkillsMap])
  
  const onSubmit = async values => {
    if (loading) return

    if (!values.accountLinkedIn && !values.accountDiscord && !values.accountTelegram) {
      setLoading(false)
      setFormError('Add a LinkedIn, Discord or Telegram account so people can contact you')
      return
    }

    setLoading(true)
    setFormError(null)

    const usernameChanged = me?.username !== values.username

    const servicesList = []
    services.forEach(service => {
      if (values[`service-${service.id}`] && !servicesList.includes(service.id)) servicesList.push(service.id)
    })

    const skillsList = []
    skills.forEach(skill => {
      if (values[`skill-${skill.id}`] && !skillsList.includes(skill.id)) skillsList.push(skill.id)
    })

    const input = {
      ... usernameChanged && { username: values.username },
      roleStakePoolOperator: values.roleStakePoolOperator,
      roleCommunityAdvisor: values.roleCommunityAdvisor,
      availableForCollaboration: values.availableForCollaboration,
      accountLinkedIn: values.accountLinkedIn,
      accountGithub: values.accountGithub,
      accountTwitter: values.accountTwitter,
      accountDiscord: values.accountDiscord,
      accountTelegram: values.accountTelegram,
      services: servicesList,
      skills: skillsList
    }

    const response = await updateUser({
      variables: { input },
      refetchQueries: [{ query: ME_QUERY }]
    })
      .catch(error => setFormError(error.message))

    if (response?.data?.updateUser) {
      router.replace('/profile')      
    }

    setLoading(false)
  }

  return (
    <Column width='100%'>
      <HTMLHead
        title='Profile | Project Catalyst Community Site'
        description='Update your profile so it has the right information you want to share with the Project Catalyst community.'
      />
      <PageHeader />

      <Column maxWidth='1200px' minHeight='64vh' width='100%' alignSelf='center' pb='30px' px='20px'>
        { initialLoading && !defaultValues || !defaultValues.username &&
          <Box width='100%' justifyContent='flex-start'>
            <Loading />
          </Box>
        }

        { !initialLoading && defaultValues && !!defaultValues.username &&
          <UpdateForm
            checkUsername={checkUsername}
            me={me}
            loading={loading}
            formError={formError}
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            categories={categories}
            servicesMap={servicesMap}
            skillsMap={skillsMap}
          />
        }
      </Column>

      <PageFooter />
    </Column>
  )
}

export default UpdateProfile
