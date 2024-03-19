import React from 'react'
import { Button } from 'flowbite-react';

function Messages() {
  return (
    <div>    
      <div className=' ml-72'>
      <Button.Group>
          <Button color="gray" >UNREAD</Button>
          <Button color="gray" >READ</Button>
        </Button.Group>
    </div>
    <div className=" ml-4">
        <input
          type="text"
          placeholder="Search Courses..."
          className="border p-2 w-60  rounded-md focus:selection:"
        />
      </div>
    </div>
  )
}

export default Messages