import React from 'react'
import { Drawer, List, Avatar } from 'antd'

import EmptyImage from '../assets/images/kakao-friends.png'
import { User as UserProps } from '../modules/user'

interface ChatDetailDrawerProps {
  userList: UserProps[]
  visible: boolean
  onClose: () => void
  onClick: (id: string) => void
}

export const RoomDetailDrawer: React.FC<ChatDetailDrawerProps> = ({ userList, visible, onClose, onClick }) => {
  return (
    <Drawer title="채팅방 서랍" placement="right" onClose={onClose} visible={visible} closable>
      <List
        header={<h3>대화상대</h3>}
        dataSource={userList}
        renderItem={({ imageURL, _id, userName }) => (
          <List.Item key={_id} onClick={() => onClick(_id)}>
            <List.Item.Meta avatar={<Avatar src={imageURL || EmptyImage} />} title={userName} />
          </List.Item>
        )}
      />
    </Drawer>
  )
}
