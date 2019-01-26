import React from 'react'
import {SectionList, StyleSheet, Text, View} from 'react-native'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      habits: {
        todo: [{title: 'work out'}, {title: 'write code'}],
        completed: [{title: 'play elevate'}]
      }
    }
  }

  render() {
    const {todo, completed} = this.state.habits
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'To Do', data: todo},
            {title: 'Completed', data: completed},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sectionHeader: {
    marginTop: 16,
    color: 'blue',
    fontSize: 16
  }
})
