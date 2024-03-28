import React from 'react'
import { Button } from 'flowbite-react';

function MyCourses() {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-72">
        <Button.Group>
          <Button color="gray">MY COURSES</Button>
          <Button color="gray">RESULT</Button>
       </Button.Group>
     </div>
  <div className="mr-72">
    <input
      type="text"
      placeholder="Search Courses..."
      className="border p-2 w-60 rounded-md focus:selection:"
    />
  </div>
</div>
  )
}

export default MyCourses
