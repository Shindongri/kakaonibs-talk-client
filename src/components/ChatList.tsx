import React, { Fragment } from 'react'
import { map } from 'lodash/fp'
import { Chat as ChatProps } from '../modules/room'

import ChatToSend from './ChatToSend'
import ChatToReceive from './ChatToReceive'

type ChatListProps = {
  messageList: ChatProps[]
  emptyImage: string
  myUUID: string | null
  opponent: string | null
}

const ChatList: React.FC<ChatListProps> = ({ opponent, messageList, myUUID, emptyImage }) => {
  console.log(messageList)
  return (
    <Fragment>
      {map(({ _id, chat, createdAt, user, image }) =>
        myUUID === user ? (
          <ChatToSend key={_id} _id={_id} chat={chat} image={image} createdAt={createdAt} />
        ) : (
          <ChatToReceive
            key={_id}
            _id={_id}
            thumbnailImage={emptyImage}
            image={image}
            name={opponent}
            chat={chat}
            createdAt={createdAt}
          />
        ),
      )(messageList)}
    </Fragment>
  )
}

export default React.memo(ChatList)
