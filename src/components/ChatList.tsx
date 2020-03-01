import React, { Fragment } from 'react'
import { map } from 'lodash/fp'
import { Chat as ChatProps } from '../modules/room'

import ChatToSend from './ChatToSend'
import ChatToReceive from './ChatToReceive'

type ChatListProps = {
  messageList: ChatProps[];
  emptyImage: string;
  myUUID: string;
  opponent: string | null;
}

const ChatList: React.FC<ChatListProps> = ({ opponent, messageList, myUUID, emptyImage }) => {
  return (
    <Fragment>
      {
        map(({ _id, chat, createdAt, user }) => myUUID === user ? <ChatToSend key={ _id } _id={ _id } chat={ chat } createdAt={ createdAt } /> : <ChatToReceive key={ _id } _id={ _id } imageUrl={ emptyImage } name={ opponent } chat={ chat } createdAt={ createdAt }/>)(messageList)
      }
    </Fragment>
  )
}

export default React.memo(ChatList)
