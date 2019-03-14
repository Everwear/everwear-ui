import React from 'react'
import { View } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import $ from './SegmentedTabStyles'

const SegmentedTab = ({
  values,
  selectedIndex,
  onTabPress,
  style,
}) => (
  <View style={[$.container, style]}>
    <SegmentedControlTab
      values={values}
      selectedIndex={selectedIndex}
      tabStyle={$.tab}
      activeTabStyle={$.tabActive}
      tabTextStyle={$.text}
      activeTabTextStyle={$.textActive}
      onTabPress={onTabPress}
    />
  </View>
)

export default SegmentedTab
