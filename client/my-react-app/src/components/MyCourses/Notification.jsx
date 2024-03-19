import React from 'react'
import { Button, Dropdown } from 'flowbite-react';

function Notification() {
  return (
    <div>
    <div className=' ml-72'>
      <Button.Group>
          <Button color="gray" >UNREAD</Button>
          <Button color="gray" >READ</Button>
        </Button.Group>
    </div>
    <div className=' justify-end '>
        <Dropdown label="Dropdown"  inline className="text-lg items-end">
         <Dropdown.Item>Newest First</Dropdown.Item>
         <Dropdown.Item>Oldest First </Dropdown.Item>
      </Dropdown>
    </div>
    </div>
  )
}

export default Notification
