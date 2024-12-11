"use client"
import React from 'react'

function error(error) {
  return (
    <div>error due to {error.message}</div>
  )
}

export default error