import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Post from './Post'

export const PostList = ({ data, onOpen }) => {
  return (
    <FlatList
      style={style.wrapper}
      data={data}
      keyExtractor={(data) => data.id.toString()}
      renderItem={({ item }) => <Post postList={item} onOpen={onOpen} />}
    />
  )
}

const style = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
})
