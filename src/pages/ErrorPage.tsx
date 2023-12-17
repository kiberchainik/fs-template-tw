import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()//для отлова и показа ошибок
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage