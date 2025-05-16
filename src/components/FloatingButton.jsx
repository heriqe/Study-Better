export default function FloatingButton() {
    return (
      <div className="fixed bottom-6 right-6">
        <button className="floating-btn flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full shadow-lg text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <i className="fas fa-comment-dots text-xl"></i>
        </button>
      </div>
    )
  }