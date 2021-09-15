import React from 'react'

import Input from './input'
import { emailRegex } from '../../../regex'

const EmailInput = ({ rules, ...props }) =>
  <Input
    rules={{
      ...rules,
      pattern: {
        value: emailRegex,
        message: 'A valid email is required'
      }
    }}
    {...props}
  />

export default EmailInput