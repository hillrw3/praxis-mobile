import React from 'react'
import {SectionList, StyleSheet, Text, View} from 'react-native'
import {Habit} from "./Habit"

const API_URL = "http://localhost:3000"
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.completeHabit = this.completeHabit.bind(this)
    this.fetchHabits = this.fetchHabits.bind(this)

    this.state = {
      habits: {
        todo: [],
        completed: []
      }
    }
  }

  componentDidMount() {
    this.fetchHabits()
  }

  fetchHabits() {
    fetch(`${API_URL}/progress_report`)
      .then(response => response.json())
      .then(response => {
        this.setState({habits: response})
      })
  }

  completeHabit(habit) {
    fetch(`${API_URL}/records`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({record: {habit_id: habit.id}})
    })
      .then(this.fetchHabits)
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
          renderItem={({item, i, section}) => <Habit habit={{...item, completed: section.completed}} completeHabit={this.completeHabit}/>}
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
