

export const NoContactSelected = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-4">
        <div className="flex items-center flex-col gap-2">
        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
          <div className="text-center">
            <h2 className="font-semibold mb-1">Please select a client to start conversation</h2>
            <p className="text-sm text-gray-500">Select a contact from the list to view the contact details and start a conversation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
