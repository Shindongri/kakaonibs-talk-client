import React from 'react'
import { mount } from 'enzyme'
import { dateConverter } from './utils/date'

import ChatToReceive from './components/ChatToReceive'
import ChatToSend from './components/ChatToSend'

/* Chat */
describe('Chat', () => {
  it('<ChatToReceive /> matches snapshot', () => {
    const wrapper = mount(<ChatToReceive _id="test" name={'abcdefg'} chat={'efd'} createdAt={new Date()} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('<ChatToSend /> matches snapshot', () => {
    const somDay = new Date()
    const wrapper = mount(<ChatToSend _id="test" chat="hi" createdAt={somDay} />)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.props()._id).toBe('test')
    expect(wrapper.props().chat).toBe('hi')

    const TimeElement = wrapper.find('.time')
    const TextElement = wrapper.find('.text')

    const convertedDate = dateConverter(somDay, 'HH:mm').toString()

    expect(TimeElement.contains(convertedDate)).toBe(true)
    expect(TextElement.contains('hi')).toBe(true)
  })
})
