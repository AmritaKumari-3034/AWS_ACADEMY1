import React, {useState} from 'react'
import { Card } from 'flowbite-react';
import { HiChartPie, HiAcademicCap, HiAnnotation, HiCollection, HiSparkles, HiSortAscending ,
     HiCloudDownload, HiDatabase, HiOutlineTrendingUp, HiDocumentDuplicate, HiServer     } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa'; 


const ExploreOurProgram = () => {

    const [selectedItem, setSelectedItem] = useState('popular');
  
    const showCourses = (category) => {
      setSelectedItem(category);
    };
  
    const hideAllCourses = () => {
      setSelectedItem(null);
    };

  return (
    <div className=' bg-slate-200'>
        <div className='text-3xl font-bold text-center'>
          Explore Our Programs
        </div>
      <div className="flex ml-40">
      <div className=" w-1/5 bg-white text-black p-4">
        <div className="mb-4">
          <div className="text-xl font-bold border-b border-gray-300 ">Courses</div>
        </div>
        <div className="space-y-2 ">
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'popular' ? 'bg-gray-600 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('popular')}
          >
            <HiAcademicCap  className="inline mr-2 " />
            Popular Courses
            <FaArrowRight className="inline ml-12" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'automation' ?  'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('automation')}
          >
            <HiAnnotation  className="inline mr-2" />
            Automation
           <FaArrowRight className="inline ml-20" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'cloud' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('cloud')}
          >
            <HiCloudDownload className="inline mr-2" />
            Cloud Computing
             <FaArrowRight className="inline ml-10" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'cyber' ? 'bg-gray-700 rounded-xl hover:text-white' : ' rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('cyber')}
          >
            <HiChartPie className="inline mr-2" />
            Cyber Security
              <FaArrowRight className="inline ml-16" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'data' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('data')}
          >
            <HiDatabase  className="inline mr-2" />
            Data Science
             <FaArrowRight className="inline ml-20" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'devops' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('devops')}
          >
            <HiOutlineTrendingUp  className="inline mr-2" />
            Devops
            <FaArrowRight className="inline ml-28" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'didb' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('didb')}
          >
            <HiDocumentDuplicate  className="inline mr-2" />
            DIDB
            <FaArrowRight className="inline ml-32" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'itservices' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('itservices')}
          >
            <HiServer  className="inline mr-2" />
            IT Services
            <FaArrowRight className="inline ml-24" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'management' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('management')}
          >
            <HiCollection className="inline mr-2" />
            Management
             <FaArrowRight className="inline ml-20" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'software' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('software')}
          >
            <HiSortAscending  className="inline mr-2" />
            Software Devlopment
            <FaArrowRight className="inline ml-3" />
          </div>
          <div
            className={`cursor-pointer p-2 ${selectedItem === 'uiuxdesign' ? 'bg-gray-700 rounded-xl hover:text-white' : 'rounded-xl bg-white hover:bg-slate-500 hover:text-white'}`}
            onClick={() => showCourses('uiuxdesign')}
          >
            <HiSparkles  className="inline mr-2" />
            UI/UX Designs
            <FaArrowRight className="inline ml-16" />
          </div>
        </div>
      </div>
      <div className="w-3/4 p-4 ">
        {selectedItem === 'popular' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}

        {selectedItem === 'automation' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}

        {selectedItem === 'cloud' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
        {selectedItem === 'cyber' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
        {selectedItem === 'data' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
        {selectedItem === 'devops' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
        {selectedItem === 'didb' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
        {selectedItem === 'itservices' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
         {selectedItem === 'management' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
         {selectedItem === 'software' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}
         {selectedItem === 'uiuxdesign' && (
          <div className="bg-white p-4 mb-4 rounded shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
             </p>
          </Card>
          </div>
        )}

      </div>
    </div>
    </div>
  )
}

export default ExploreOurProgram
