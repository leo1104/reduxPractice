import React, { useState } from 'react'

function Test({name}) {
//props immutable by nature


const [first, setFirst] = useState(0)

  return (
    <div>{first}</div>
  )
}

export default Test