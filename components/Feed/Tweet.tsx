import React from 'react'
import { Tweet } from '../../Typings'


interface Props{
  tweet: Tweet
}
const Tweet = ({tweet}: Props) => {
  return (
    <div>
      hello twitter
    </div>
  )
}

export default Tweet
