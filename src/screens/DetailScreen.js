import React from 'react'
import PostSingle from '../components/PostSingle'

export default function ({ route }) {
  const { post } = route.params

  return <PostSingle post={post} />
}
