import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'

//Компонент отображение поста на главное экране
const Post = ({ postList, onOpen }) => {
  let { urls, description } = postList

  let descriptionText =
    description === null
      ? `Fantastic picture , by unknown author `
      : description

  return (
    <View style={style.wrapImg}>
      <TouchableWithoutFeedback onPress={() => onOpen(postList)}>
        <Image
          style={style.img}
          source={{
            uri: `${urls.small}`,
          }}
        />
      </TouchableWithoutFeedback>
      <Text style={style.text}>{descriptionText}</Text>
    </View>
  )
}

export default Post

const style = StyleSheet.create({
  wrapImg: {
    marginBottom: 30,
    borderBottomColor: `rgba(60, 63, 65, 0.5)`,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  img: {
    width: `100%`,
    height: 200,
    marginBottom: 10,
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
})
