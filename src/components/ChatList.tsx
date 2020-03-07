import React, { Fragment } from 'react'
import { map } from 'lodash/fp'
import { Chat as ChatProps } from '../modules/room'

import { ChatToSend, ChatToReceive } from '../components'

type ChatListProps = {
  messageList: ChatProps[]
  emptyImage: string
  myUUID: string | null
}

export const ChatList: React.FC<ChatListProps> = React.memo(({ messageList, myUUID, emptyImage }) => (
  <Fragment>
    {map(({ _id, chat, createdAt, user, image }) =>
      myUUID === user ? (
        <ChatToSend key={_id} _id={_id} chat={chat} image={image} createdAt={createdAt} />
      ) : (
        <ChatToReceive
          key={_id}
          _id={_id}
          name={_id}
          thumbnailImage={emptyImage}
          image={image}
          chat={chat}
          createdAt={createdAt}
        />
      ),
    )(messageList)}
  </Fragment>
))
