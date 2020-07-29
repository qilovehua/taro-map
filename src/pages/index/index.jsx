import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Map } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

import icon from './location.png'

const ms = [{
  longitude: 121.474275,
  latitude: 31.233541,
  width: 40,
  height: 40,
  iconPath: icon,
}, {
  longitude: 121.549892,
  latitude: 31.242274,
  width: 40,
  height: 40,
  iconPath: icon,
}]


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  state = {
    lng: 121.474275,
    lat: 31.233541,
    markers: ms,
    points: ms.map(item => ({ longitude: item.longitude, latitude: item.latitude })),
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {lng, lat, markers, points} = this.state
    return (
      <View className='index'>
        <Map style='width: 100vw; height: 100vh;' longitude={lng} latitude={lat} scale='14'
          markers={markers} includePoints={points} setting={{}} />
      </View>
    )
  }
}

export default Index

