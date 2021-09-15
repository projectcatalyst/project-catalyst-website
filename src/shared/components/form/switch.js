import React, { useMemo } from 'react'
import { useController } from 'react-hook-form'

import Switch from '../switch'
import { defaultErrorMessages } from './form'

const FormSwitch = ({ name, control, rules, defaultValue, ...props }) => {
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
    <Switch
      inputRef={ref}
      name={name}
      error={errorMessage}
      touched={isTouched}
      {...inputProps}
      {...props}
    />
  )
}

export default FormSwitch