import io from 'socket.io-client'

export default io('http://localhost:8080/', { path: '/socket.io', transports: ['websocket'] })
