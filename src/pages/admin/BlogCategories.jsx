import { useFrappeCreateDoc, useFrappeDeleteDoc, useFrappeGetDocList, useFrappeUpdateDoc, useFrappeDocTypeEventListener } from "frappe-react-sdk";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import {
  useToast,
} from '@chakra-ui/react'
import { SfModal, SfButton, SfIconClose, useDisclosure } from "@storefront-ui/react";
import { useForm } from 'react-hook-form'
import { CSSTransition } from 'react-transition-group'

const BlogCategories = () => {
  const { data, isLoading, error, mutate } = useFrappeGetDocList('Blog Category', {
    fields: ['name', 'title']
  })

  const [rowNum, setRowNum] = useState(null)

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()

  const toast = useToast()

  const { createDoc, loading } = useFrappeCreateDoc()
  const { updateDoc, loading: loadingUpdate } = useFrappeUpdateDoc()
  const { deleteDoc, loading: loadingDelete } = useFrappeDeleteDoc()

  const { isOpen: isOpenCreateCate, open: openCreateCate, close: closeCreateCate } = useDisclosure();
  const { isOpen: isOpenUpdateCate, open: openUpdateCate, close: closeUpdateCate } = useDisclosure();
  const { isOpen: isOpenDeleteCate, open: openDeleteCate, close: closeDeleteCate } = useDisclosure();
  const cancelRef = useRef()

  const createCate = (info) => {
    createDoc('Honda Blog Category', info)
    .then(() => {
      closeCreateCate();
      toast({
        title: 'Blog category created',
        description: "The blog category has been created.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
        toast({
          title: 'There has been an error',
          description: "Sorry, it seems that there has been an error while creating the blog category.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    })
  }

  const clickToCloseUpdateCate = () => {
    setRowNum(null);
    closeUpdateCate();
  }

  const clickToCloseDeleteCate = () => {
    setRowNum(null);
    closeDeleteCate();
  }

  const clickToUpdateCate = (index) => {
    setRowNum(index);
    openUpdateCate();
  }

  const clickToDeleteCate = (index) => {
    setRowNum(index);
    openDeleteCate();
  }

  useFrappeDocTypeEventListener('Blog Category', (d) => {
    console.log(d)
      if (d.doctype === 'Blog Category'){
      mutate()
    }
  })

  const updateCate = (info) => {
    updateDoc('Blog Category', data[rowNum].name, info)
    .then(() => {
      closeUpdateCate();
      toast({
        title: 'Blog category updated',
        description: "The blog category has been updated.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
        toast({
          title: 'Unable to update',
          description: "Sorry, you cannot update the blog category while there are posts that relate to this blog category.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    })
  }

  const deleteCate = (info) => {
    deleteDoc('Blog Category', data[rowNum].name, info)
    .then(() => {
      closeDeleteCate();
      setRowNum(null);
      toast({
        title: 'Blog category deleted',
        description: "The blog category has been deleted.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }).catch(() => {
        toast({
          title: 'Unable to delete',
          description: "Sorry, you cannot delete the blog category while there are posts that relate to this blog category.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    })
  }

  return (
    <>
      <SidebarAdmin />
      <div className="py-16 px-40 p-4 container-admin">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Blog Categories</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={openCreateCate}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-[100px]">
                        ID
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {/* {data && (
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {data.map((d, index) => (
                        <tr key={d.index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {d.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{d.category}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex gap-x-2 justify-end">
                            <button onClick={() => clickToUpdateCate(index)} className="text-indigo-600 hover:text-indigo-900" fontSize="14px">
                              Edit
                            </button>
                            <button onClick={() => clickToDeleteCate(index)} className="text-indigo-600 hover:text-indigo-900" fontSize="14px">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )} */}
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Test
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Also test</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex gap-x-5 justify-end">
                        <button onClick={() => clickToUpdateCate()} className="text-indigo-600 hover:text-indigo-900 text-sm">
                          Edit
                        </button>
                        <button onClick={() => clickToDeleteCate()} className="text-indigo-600 hover:text-indigo-900 text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CSSTransition
        in={isOpenCreateCate}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterDone: 'opacity-100 transition duration-200 ease-out',
          exitActive: 'opacity-0 transition duration-200 ease-out',
        }}
      >
        <div className="fixed inset-0 bg-neutral-700 bg-opacity-50" />
      </CSSTransition>
      <SfModal open={isOpenCreateCate} onClose={closeCreateCate}>
        <form onSubmit={handleSubmit(createCate)}>
          <header className="flex justify-between">
            Add category
            <SfIconClose onClick={closeCreateCate}/>
          </header>
          <main className="flex flex-col">
            <label htmlFor='title'>Category Name:</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 my-[11px]' type="text" {...register('title')}/>
          </main>

          <footer>
            <SfButton variant='ghost' mr={3} onClick={closeCreateCate}>
              Close
            </SfButton>
            <SfButton colorScheme='blue' type='submit' isLoading={loading}>Save</SfButton>
          </footer>
        </form>
      </SfModal>
      
      <CSSTransition
        in={isOpenUpdateCate}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterDone: 'opacity-100 transition duration-200 ease-out',
          exitActive: 'opacity-0 transition duration-200 ease-out',
        }}
      >
        <div className="fixed inset-0 bg-neutral-700 bg-opacity-50" />
      </CSSTransition>
      <SfModal open={isOpenUpdateCate} onClose={closeUpdateCate}>
        <form onSubmit={handleSubmit(updateCate)}>
          <header className="flex justify-between text-lg">
            Update category: {data && rowNum !== null && data[rowNum].category}
            <SfIconClose onClick={closeUpdateCate}/>
          </header>
            
            <main className="flex flex-col">
              <label>Category Name:</label>
              <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 my-[11px]' type="text" defaultValue={data && rowNum !== null && data[rowNum].category} {...register('title')}/>
            </main>

            <footer>
              <SfButton variant='ghost' mr={3} onClick={closeUpdateCate}>
                Close
              </SfButton>
              <SfButton colorScheme='blue' type='submit' isLoading={loadingUpdate}>Save</SfButton>
            </footer>
        </form>
      </SfModal>

      <CSSTransition
        in={isOpenDeleteCate}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterDone: 'opacity-100 transition duration-200 ease-out',
          exitActive: 'opacity-0 transition duration-200 ease-out',
        }}
      >
        <div className="fixed inset-0 bg-neutral-700 bg-opacity-50" />
      </CSSTransition>
      <SfModal
        open={isOpenDeleteCate}
        onClose={closeDeleteCate}
      >
        <form onSubmit={handleSubmit(deleteCate)}>
          <header className="text-lg">
            Delete Category: {data && rowNum !== null && data[rowNum].category}
          </header>

          <main>
            Are you sure? You can't undo this action afterwards.
          </main>

          <footer>
            <SfButton ref={cancelRef} onClick={closeDeleteCate}>
              Cancel
            </SfButton>
            <SfButton colorScheme='red' type='submit' isLoading={loadingDelete} ml={3}>
              Delete
            </SfButton>
          </footer>
        </form>
      </SfModal>
    </>
  )
}

export default BlogCategories;