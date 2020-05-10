import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsAsync } from '../store/reducers/posts'
import { PostList } from '../components/PostList'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import { THEME } from '../theme'

export default function ({ navigation }) {
  const handlerOpenPost = (post) => {
    navigation.navigate('Details', { post })
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsAsync())
  }, [dispatch])

  const data = useSelector(({ postState }) => postState.posts)
  const spinner = useSelector(({ postState }) => postState.spinner)

  const error = useSelector(({ postState }) => {
    return postState.error
  })

  if (error) {
    return (
      <View style={style.center}>
        <Text>'we will fix the error soon'</Text>
      </View>
    )
  }

  if (spinner) {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color={`${THEME.SPINNER_COLOR}`} />
      </View>
    )
  }

  return <PostList onOpen={handlerOpenPost} data={data} />
}
const style = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
