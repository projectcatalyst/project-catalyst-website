import React from 'react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import Input from './input'

const PhoneNumberInput = ({ countryCode, rules, ...props }) =>
  <Input
    rules={{
      ...rules,
      validate: {
        validPhoneNumber: value => {
          // Country Alpha-2 codes, e.g. GB, US, AU
          const phoneNumber = parsePhoneNumberFromString(value, countryCode)
          return !!phoneNumber && phoneNumber.isValid()
        }
      }
    }}
    type='tel'
    {...props}
  />

export default PhoneNumberInput
