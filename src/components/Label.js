export function Label({ children, htmlFor, className = "", required = false }) {
<<<<<<< HEAD
    return (
      <label
        className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}
        htmlFor={htmlFor}
      >
        {children} {required && <b className="text-red-500">*</b>}
      </label>
    );
  }
=======
  return (
    <label
      className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}
      htmlFor={htmlFor}
    >
      {children} {required && <b className="text-red-500">*</b>}
    </label>
  );
}
>>>>>>> e239d19c455d31ced2865a616efd12d1b5e4bbd3
