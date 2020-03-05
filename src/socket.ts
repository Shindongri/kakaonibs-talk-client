import io from 'socket.io-client'

export default (to: string) => io(`${process.env.REACT_APP_API_HOST}/${to}`, { path: '/socket.io' })
