import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button} from 'react-native';
import TopView from 'react-native-topview';

const topView = new TopView(AppRegistry)

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.count = 0;
  }

  handleAdd = ()=>{
    this.count ++
    const { count } = this;
    topView.push(function(){
      return <View><Text>TopView Element {count}.</Text></View>
    })
  }

  handlePop = ()=>{
    topView.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={this.handleAdd}
          title="新增"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.handlePop}
          title="删除"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
