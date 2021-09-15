import React, { useMemo } from 'react'
import { useController } from 'react-hook-form'

import { defaultErrorMessages } from '../form'
import Input from '../../input'

const FormInput = ({ register, control, onChange, defaultValue = '', name, rules, ...props }) => {
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
    <Input
      {...inputProps}
      inputRef={ref}
      name={name}
      touched={isTouched}
      error={errorMessage}
      onChange={e => inputProps.onChange(onChange(e.target.value))}
      {...props}
    />
  )
}


export default FormInput