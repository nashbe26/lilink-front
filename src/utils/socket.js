import { io } from 'socket.io-client';

const URL =  'http://localhost:3005';

export const socket = io(URL);