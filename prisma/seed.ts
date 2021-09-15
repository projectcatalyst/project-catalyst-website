import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const randomNumber = maximum => 
  Math.floor(Math.random() * maximum)

async function main() {  
  // Seed data found in project repositories https://github.com/projectcatalyst
  const skills = require('../../community-seed-data/skills.json')
  const services = require('../../community-seed-data/services.json')
  const categories = require('../../community-seed-data/categories.json')
  const skillsCategories = require('../../community-seed-data/skills-categories.json')
  const servicesCategories = require('../../community-seed-data/services-categories.json')

  // Skills
  await asyncForEach(skills, async skill => {
    await prisma.skill.upsert({
      where: {
        id: skill.id
      },
      update: {
        name: skill.name
      },
      create: {
        id: skill.id,
        name: skill.name
      }
    })
  })
  console.log('Skills added successfully')

  // Services
  await asyncForEach(services, async service => {
    await prisma.service.upsert({
      where: {
        id: service.id
      },
      update: {
        name: service.name
      },
      create: {
        id: service.id,
        name: service.name
      }
    })
  })
  console.log('Services added successfully')

  // Categories
  await asyncForEach(categories, async category => {
    await prisma.category.upsert({
      where: {
        id: category.id
      },
      update: {
        name: category.name
      },
      create: {
        id: category.id,
        name: category.name
      }
    })
  })
  console.log('Categories added successfully')

  // Skill categories
  await asyncForEach(skillsCategories, async skillCategory => {
    await prisma.skillCategory.upsert({
      where: {
        skillId_categoryId: {
          skillId: skillCategory.skill,
          categoryId: skillCategory.category 
        }
      },
      update: {
        skillId: skillCategory.skill,
        categoryId: skillCategory.category
      },
      create: {
        skillId: skillCategory.skill,
        categoryId: skillCategory.category
      }
    })
  })
  console.log('Skill categories added successfully')

  // Service categories
  await asyncForEach(servicesCategories, async serviceCategory => {
    await prisma.serviceCategory.upsert({
      where: {
        serviceId_categoryId: {
          serviceId: serviceCategory.service,
          categoryId: serviceCategory.category 
        }
      },
      update: {
        serviceId: serviceCategory.service,
        categoryId: serviceCategory.category
      },
      create: {
        serviceId: serviceCategory.service,
        categoryId: serviceCategory.category
      }
    })
  })
  console.log('Service categories added successfully')

  if (process.env.MOCK) {
    console.log('--- Also adding mock data ---')

    await mockUserData()
  }

  return true
}

async function mockUserData() {
  const skills = require('../../community-seed-data/skills.json')
  const services = require('../../community-seed-data/services.json')

  const usersList = []

  for (let i = 100; i < 105; i++) {
    usersList.push({
      email: `${i}@gmail.com`,
      name: `${i}name not onboarded`,
      image: 'https://lh3.googleusercontent.com/a-/AOh14GgWMdRblL0G426qzhpaFcRI4oaEhyvoSF_O2uPbsLNkJ5h9PVZIll20kIWuMf4s-_KQEwlHJn4SvON9xdohe5NlNUM4nrlf5xkavRquIF8R7DfryJ8gXOOfil6GhMLIG9pfzHGBUKqq5C-ZNb7uuKxNs-_tahZ50JoJmYbi7RbNaQVySsBgK0cOhtdtJxY-ZZL3N4m_5dy0Rl6xS2VFLN1cO4kiOd-Cro-y0oNeFb7MiDV5S7eNTHzBvTKhwLh0LASXm0A4ZlGAvF0A-jt43jJCy6PiAu1IHJIrIbps1sVUPb2gDhAtByWBxum-SS80rpmSOjAC2P62Qo-mXIRP1l67JT1Ab6azOwwKNhQY26xT7sc9E-0cSs5sZCs1pRUZqZ3g_WPy9FcBi8r-hC3s_4BGSBAfb23WbzunArjT7HOHhnbIkFTfea7Ww4THBrmbfflsiWfurdfGr_USskoreJGxyLwdNpKERrCbxGZHOk4txVVvsLurSPZPY1phvkaOQ_zwZnH-f3qIYu8ncw7xnERrpi_v7Jk0rYAprW8rjksH2uxgDfIwer5LNLJfxyitGAMMLiLFtPuBCn7oMsAb2yqxCFQrggXiJsKxxMmTCK0mAJw8jfV6_VyECB9GwoDndk7IfRniUCSydWL_p7x9944YVpv9-4LQ59zP6FdGahLeT2wVpTBXWaPkT5ihFvz7nbqGPhNsWxMzBD-N_pCGthjllHWKSGv0m-BxobuNE45jGKPIEMx_FDWP4lPTenfrP9Zp3A=s160-c',
      thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GgWMdRblL0G426qzhpaFcRI4oaEhyvoSF_O2uPbsLNkJ5h9PVZIll20kIWuMf4s-_KQEwlHJn4SvON9xdohe5NlNUM4nrlf5xkavRquIF8R7DfryJ8gXOOfil6GhMLIG9pfzHGBUKqq5C-ZNb7uuKxNs-_tahZ50JoJmYbi7RbNaQVySsBgK0cOhtdtJxY-ZZL3N4m_5dy0Rl6xS2VFLN1cO4kiOd-Cro-y0oNeFb7MiDV5S7eNTHzBvTKhwLh0LASXm0A4ZlGAvF0A-jt43jJCy6PiAu1IHJIrIbps1sVUPb2gDhAtByWBxum-SS80rpmSOjAC2P62Qo-mXIRP1l67JT1Ab6azOwwKNhQY26xT7sc9E-0cSs5sZCs1pRUZqZ3g_WPy9FcBi8r-hC3s_4BGSBAfb23WbzunArjT7HOHhnbIkFTfea7Ww4THBrmbfflsiWfurdfGr_USskoreJGxyLwdNpKERrCbxGZHOk4txVVvsLurSPZPY1phvkaOQ_zwZnH-f3qIYu8ncw7xnERrpi_v7Jk0rYAprW8rjksH2uxgDfIwer5LNLJfxyitGAMMLiLFtPuBCn7oMsAb2yqxCFQrggXiJsKxxMmTCK0mAJw8jfV6_VyECB9GwoDndk7IfRniUCSydWL_p7x9944YVpv9-4LQ59zP6FdGahLeT2wVpTBXWaPkT5ihFvz7nbqGPhNsWxMzBD-N_pCGthjllHWKSGv0m-BxobuNE45jGKPIEMx_FDWP4lPTenfrP9Zp3A=s80-c',
      roleStakePoolOperator: Boolean(randomNumber(2)),
      roleCommunityAdvisor: Boolean(randomNumber(2)),
      availableForCollaboration: Boolean(randomNumber(2))
    })
  }

  for (let i = 0; i < 50; i++) {
    usersList.push({
      username: `${i}-username`,
      email: `${i}@gmail.com`,
      name: `${i}name lastName`,
      image: 'https://lh3.googleusercontent.com/a-/AOh14GgWMdRblL0G426qzhpaFcRI4oaEhyvoSF_O2uPbsLNkJ5h9PVZIll20kIWuMf4s-_KQEwlHJn4SvON9xdohe5NlNUM4nrlf5xkavRquIF8R7DfryJ8gXOOfil6GhMLIG9pfzHGBUKqq5C-ZNb7uuKxNs-_tahZ50JoJmYbi7RbNaQVySsBgK0cOhtdtJxY-ZZL3N4m_5dy0Rl6xS2VFLN1cO4kiOd-Cro-y0oNeFb7MiDV5S7eNTHzBvTKhwLh0LASXm0A4ZlGAvF0A-jt43jJCy6PiAu1IHJIrIbps1sVUPb2gDhAtByWBxum-SS80rpmSOjAC2P62Qo-mXIRP1l67JT1Ab6azOwwKNhQY26xT7sc9E-0cSs5sZCs1pRUZqZ3g_WPy9FcBi8r-hC3s_4BGSBAfb23WbzunArjT7HOHhnbIkFTfea7Ww4THBrmbfflsiWfurdfGr_USskoreJGxyLwdNpKERrCbxGZHOk4txVVvsLurSPZPY1phvkaOQ_zwZnH-f3qIYu8ncw7xnERrpi_v7Jk0rYAprW8rjksH2uxgDfIwer5LNLJfxyitGAMMLiLFtPuBCn7oMsAb2yqxCFQrggXiJsKxxMmTCK0mAJw8jfV6_VyECB9GwoDndk7IfRniUCSydWL_p7x9944YVpv9-4LQ59zP6FdGahLeT2wVpTBXWaPkT5ihFvz7nbqGPhNsWxMzBD-N_pCGthjllHWKSGv0m-BxobuNE45jGKPIEMx_FDWP4lPTenfrP9Zp3A=s160-c',
      thumbnail: 'https://lh3.googleusercontent.com/a-/AOh14GgWMdRblL0G426qzhpaFcRI4oaEhyvoSF_O2uPbsLNkJ5h9PVZIll20kIWuMf4s-_KQEwlHJn4SvON9xdohe5NlNUM4nrlf5xkavRquIF8R7DfryJ8gXOOfil6GhMLIG9pfzHGBUKqq5C-ZNb7uuKxNs-_tahZ50JoJmYbi7RbNaQVySsBgK0cOhtdtJxY-ZZL3N4m_5dy0Rl6xS2VFLN1cO4kiOd-Cro-y0oNeFb7MiDV5S7eNTHzBvTKhwLh0LASXm0A4ZlGAvF0A-jt43jJCy6PiAu1IHJIrIbps1sVUPb2gDhAtByWBxum-SS80rpmSOjAC2P62Qo-mXIRP1l67JT1Ab6azOwwKNhQY26xT7sc9E-0cSs5sZCs1pRUZqZ3g_WPy9FcBi8r-hC3s_4BGSBAfb23WbzunArjT7HOHhnbIkFTfea7Ww4THBrmbfflsiWfurdfGr_USskoreJGxyLwdNpKERrCbxGZHOk4txVVvsLurSPZPY1phvkaOQ_zwZnH-f3qIYu8ncw7xnERrpi_v7Jk0rYAprW8rjksH2uxgDfIwer5LNLJfxyitGAMMLiLFtPuBCn7oMsAb2yqxCFQrggXiJsKxxMmTCK0mAJw8jfV6_VyECB9GwoDndk7IfRniUCSydWL_p7x9944YVpv9-4LQ59zP6FdGahLeT2wVpTBXWaPkT5ihFvz7nbqGPhNsWxMzBD-N_pCGthjllHWKSGv0m-BxobuNE45jGKPIEMx_FDWP4lPTenfrP9Zp3A=s80-c',
      services: [
        services[randomNumber(services.length - 1)].id,
        services[randomNumber(services.length - 1)].id,
        services[randomNumber(services.length - 1)].id,
        services[randomNumber(services.length - 1)].id
      ].filter((x, i, a) => a.indexOf(x) == i),
      skills: [
        skills[randomNumber(skills.length - 1)].id,
        skills[randomNumber(skills.length - 1)].id,
        skills[randomNumber(skills.length - 1)].id
      ].filter((x, i, a) => a.indexOf(x) == i),
      roleStakePoolOperator: Boolean(randomNumber(2)),
      roleCommunityAdvisor: Boolean(randomNumber(2)),
      availableForCollaboration: Boolean(randomNumber(2))
    })
  }

  // Users
  await asyncForEach(usersList, async user => {
    const {
      username,
      email,
      name,
      services,
      skills,
      image, 
      thumbnail,
      roleStakePoolOperator,
      roleCommunityAdvisor,
      availableForCollaboration
    } = user

    await prisma.user.upsert({
      where: {
        email
      },
      create: {
        ... !!username && { username },
        email,
        image,
        thumbnail,
        name,
        ... !!services && {
          services: {
            create: services.map(service => ({ serviceId: service }))
          }
        },
        ... !!skills && {
          skills: {
            create: skills.map(skill => ({ skillId: skill }))
          }
        },
        ... !!roleStakePoolOperator && { roleStakePoolOperator: true },
        ... !!roleCommunityAdvisor && { roleCommunityAdvisor: true },
        ... !!availableForCollaboration && { availableForCollaboration: true }
      },
      update: {
        ... !!username && { username },
        name,
        image,
        thumbnail,
        ... !!services && {
          services: {
            create: services.map(service => ({ serviceId: service }))
          }  
        },
        ... !!skills && {
          skills: {
            create: skills.map(skill => ({ skillId: skill }))
          }  
        },
        ... !!roleStakePoolOperator && { roleStakePoolOperator: true },
        ... !!roleCommunityAdvisor && { roleCommunityAdvisor: true },
        ... !!availableForCollaboration && { availableForCollaboration: true }
      }
    })
  })
  console.log('Mock users added successfully')
} 

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })