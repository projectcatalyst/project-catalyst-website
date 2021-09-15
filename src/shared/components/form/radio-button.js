import React, { useMemo } from 'react'
import { useController } from 'react-hook-form'

import RadioButton from '../radio-button'
import { defaultErrorMessages } from './form'

const FormRadioButton = ({ name, control, rules, defaultValue = undefined, ...props }) => {
  const {
    field: { ref, value, ...inputProps },
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
    <RadioButton
      inputRef={ref}
      name={name}
      touched={isTouched}
      error={errorMessage}
      {...props}
      {...inputProps}
      checked={value === props.value}
    />
  )
}

export default FormRadioButton