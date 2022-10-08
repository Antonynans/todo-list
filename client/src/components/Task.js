import React from 'react'
import AddTask from './AddTask'
import Nav from './Nav'
import TasksContainer from './TasksContainer';
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

export default function Task() {
  return (
    <div>
      <Nav />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </div>
  )
}
