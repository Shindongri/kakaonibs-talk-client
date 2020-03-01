import io from 'socket.io-client'

export default (to: string) => io(`http://localhost:8080/${ to }`, { path: '/socket.io', transports: ['websocket'] })
