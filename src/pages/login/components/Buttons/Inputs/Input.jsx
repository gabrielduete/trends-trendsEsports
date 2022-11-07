/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import PropTypes from 'prop-types'
import * as S from './styles'

function Input({ placeholder, type, onChange }) {
  const isFile = type === 'file'

  return (
    <S.Wrapper>
      {isFile ? (
        <>
          <S.InputFile
            id='files'
            accept='image/png, image/jpeg, image/jpg'
            type={type}
            placeholder={placeholder}
            onChange={() => onChange}
          />
          <S.Wrapperlabel htmlFor='files'>Envie uma foto</S.Wrapperlabel>
        </>
      ) : (
        <S.Input
          type={type}
          onChange={() => onChange}
          placeholder={placeholder}
        />
      )}
    </S.Wrapper>
  )
}

export default Input

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
