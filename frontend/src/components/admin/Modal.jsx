const Modal = ({ onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-neutral-800">
          Are you sure you want to delete?
        </h2>
        <p className="text-neutral-600 mb-6">This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-2 text-sm/6 font-semibold bg-neutral-50 rounded-full text-neutral-900 cursor-pointer"
          >
            No
          </button>
          <button
            onClick={onDelete}
            className="flex-1 block px-6 py-2 rounded-full bg-rose-600 text-white text-2xl font-nanum font-semibold shadow-md hover:bg-rose-500 hover:text-shadow-lg hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 border-8 border-double border-bground flex justify-center items-center cursor-pointer"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
