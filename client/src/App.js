import React, { Suspense, useState } from 'react'

async function GetGroupResponse() {
  const resp = await fetch('/api')
  const data = await resp.json()
  return data
}

const groups = await GetGroupResponse()

const groupStyle = {
  width: '2000px',
  display: 'flex',
  gap: '100px',
  boxSizing: 'border-box',
  margin: '50px 20px'
}

const groupInfoStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const ReturnGroups = () => {
  return (<div>
    {
      groups.map((group, i) => (
        <OneGroup key={`group-${group.id}`} group={group}/>
      ))
    }
        </div>)
}

const OneGroup = ({group}) => {
  const [friends, setFriends] = useState(false)

  const handleClick = () => {
    setFriends(friends => !friends)
  }
  return (
        <div style={groupStyle}>
          <div style={{width: '100px', height: '100px', borderRadius: '50%', background: group.avatar_color}}></div>
          <div style={groupInfoStyle}>
            <h2>{group.name}</h2>
            <p>Тип приватности: {group.closed ? 'открытая' : 'закрытая'}</p>
            <p>Количество подписчиков: {group.members_count}</p>
            <p style={{cursor: 'pointer'}} onClick={handleClick}>Количество друзей: {group.friends ? group.friends.length : 0}</p>
            
              {(() => {
                if (friends && group.friends) {
                  return (<p>{Object.values(group.friends).map((friend, i) => {
                    return (<span key={`${group.id}-friend-${i+1}`}>{`${friend.first_name} ${friend.last_name}; `}</span>)
                  })}</p>)
                }
              })()}
          </div>
        </div>
  )
}

export function App(props) {
  return (
    <Suspense fallback={<p>Still loading</p>}>
      <ReturnGroups />
    </Suspense>
  )
}
