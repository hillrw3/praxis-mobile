import React from 'react'
import {SectionList, StyleSheet, Text, View} from 'react-native'
import {Habit} from "./Habit"

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
        <Text style={styles.header}>Praxis</Text>
        <SectionList
          sections={[
            {title: 'To Do', data: todo, completed: false},
            {title: 'Completed', data: completed, completed: true},
          ]}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          renderItem={({item, i, section}) => <Habit habit={{...item, completed: section.completed}}/>}
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
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 28,
  },
  sectionHeader: {
    marginTop: 16,
    fontSize: 20
  },
})
