import React, { useMemo } from 'react'
import { useController } from 'react-hook-form'

import Dropdown from '../dropdown'
import { defaultErrorMessages } from './form'

const FormDropdown = ({ name, rules, defaultValue, control, ...props }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { isTouched, error }
  } = useController({
    name,
    control,
    rules,
    defaultValue
  })

  const errorMessage = useMemo(() =>
    error ? error.message || defaultErrorMessages[error.type] : null
  , [error])

  return (
    <Dropdown
      inputRef={ref}
      name={name}
      touched={isTouched}
      error={errorMessage}
      {...inputProps}
      {...props}
    />
  )
}

export default FormDropdown