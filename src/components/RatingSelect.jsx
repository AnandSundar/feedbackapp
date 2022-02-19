import React, {useState} from 'react'

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <div>RatingSelect</div>
  )
}

export default RatingSelect