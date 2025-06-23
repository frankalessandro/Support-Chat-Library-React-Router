export const NoChatSelectedPage = () => {
  return (
    <div className="flex items-center justify-center flex-1 h-full">
      <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-6">
        <h1 className="text-4xl font-bold">No Chat Selected</h1>
        <p className="text-xl">
          Please select a chat from the left sidebar in order to start chatting.
        </p>
      </div>
    </div>
  )
}

export default NoChatSelectedPage

