import React, { useMemo } from 'react'
import { useController } from 'react-hook-form'

import Checkbox from '../checkbox'
import { defaultErrorMessages } from './form'

const FormCheckbox = ({ name, rules, defaultValue = false, control, ...props }) => {
  const {
    field: { ref, onChange, value, ...inputProps },
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
    <Checkbox
      inputRef={ref}
      touched={isTouched}
      error={errorMessage}
      onChange={() => onChange(!value)}
      value={value}
      {...inputProps}
      {...props}
    />
  )
}

export default FormCheckbox