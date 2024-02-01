// Import necessary libraries and styles
'use client';
import { Card } from 'flowbite-react';

// Your component
function ExploreOurServices() {
  return (
    <div className="flex flex-wrap gap-0 justify-between">
      {/* Card 1 */}
      <Card href="#" className="max-w-sm mb-4 ml-36 ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

      {/* Card 2 */}
      <Card href="#" className="max-w-sm mb-4 mr-3">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

        {/* Card 3 */}
        <Card href="#" className="max-w-sm mb-4 mr-24">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

        {/* Card 4 */}
        <Card href="#" className="max-w-sm mb-4 ml-72">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

        {/* Card 5 */}
        <Card href="#" className="max-w-sm mb-4 mr-96">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

    </div>
  );
}

export default ExploreOurServices;
