import React from 'react'
import { Button, Dropdown } from 'flowbite-react';

function Notification() {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-72">
        <Button.Group>
          <Button color="gray">UNREAD</Button>
          <Button color="gray">READ</Button>
        </Button.Group>
     </div>
   <div className="mr-72 font-bold border-2 border-gray-400">
    <Dropdown label="Dropdown" inline className="text-lg items-end font-bold">
      <Dropdown.Item>Newest First</Dropdown.Item>
      <Dropdown.Item>Oldest First</Dropdown.Item>
    </Dropdown>
  </div>
</div>

  )
}

export default Notification
