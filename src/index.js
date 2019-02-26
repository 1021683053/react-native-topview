import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { uuid } from './utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  }
});

// 顶层View
class TopView extends Component{
  static defaultProps={
    elements: []
  }
  constructor(props){
    super(props);
  }
  render(){
    const { elements } = this.props
    return elements.map(({ element: Element, key})=>{
      return <Element key={key} />
    })
  }
}

// 初始化RootView
export default class RootView{
  static topView;
  constructor(AppRegistry){
    if( RootView.topView ){
      return RootView.topView;
    }

    this.elements = [];
    this.refTopView;

    AppRegistry.setWrapperComponentProvider(()=>{
      return ({ children })=>(
        <View style={styles.container} pointerEvents='box-none'>
          {children}
          <TopView ref={component=> this.refTopView=component} elements={this.elements} />
        </View>
      )
    })
    RootView.topView = this;
  }


  // 新增节点
  push(element){
    const key = uuid();
    this.elements.push({ element, key });
    this._update();
    return key;
  }

  // 删除节点
  remove(id){
    let index = null;
    this.elements.some(({ key }, idx)=>{
      if( id === key ){
        index = idx
        return true
      }
      return false
    })
    this.elements.splice(index, 1)
    this._update();
  }

  // 删除最后一个
  pop(){
    this.elements.pop();
    this._update();
  }

  // 更新TopView
  _update(){
    this.refTopView && this.refTopView.forceUpdate();
  }
}