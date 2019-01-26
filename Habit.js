import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

export class Habit extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {habit} = this.props

    return (
      <View style={styles.habit}>
        <Text style={styles.title}>{habit.title}</Text>
        {
          !habit.completed ?
            <Button title="✓" onPress={() => alert(`You completed ${habit.title}`)}/> :
            null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  habit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 12,
    height: 32,
  },
  title: {
    fontSize: 16,
    width: '85%'
  }
})
