import React, { useMemo } from 'react'
import { useController } from 'react-hook-form'

import AddCheckbox from '../add-checkbox'
import { defaultErrorMessages } from './form'

const FormAddCheckbox = ({ name, rules, defaultValue = false, control, ...props }) => {
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
    <AddCheckbox
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

export default FormAddCheckbox