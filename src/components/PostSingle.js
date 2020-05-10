import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native'
import { THEME } from '../theme'

const PostSingle = ({ post }) => {
  const [height, useHeight] = useState(0)
  const [isReady, useIsReady] = useState(false)
  const img = post.urls.regular
  const windowWidth = Dimensions.get('window').width

  useEffect(() => {
    handlerGetParams(img)
  }, [img])

  // получаем высоту картинки
  function handlerGetParams() {
    Image.getSize(img, (width, height) => {
      const result = (height * windowWidth) / width
      useHeight(result)
      useIsReady(true)
    })
  }

  if (!isReady) {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color={`${THEME.SPINNER_COLOR}`} />
      </View>
    )
  }

  return (
    <View style={style.center}>
      <Image
        style={{ width: windowWidth, height }}
        source={{
          uri: img,
        }}
      />
    </View>
  )
}
export default PostSingle

const style = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
