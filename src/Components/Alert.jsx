import React from "react";

const Alert = ({ message, type = 'success', onClose }) => {
  const typeClasses = {
    success: 'text-green-200 bg-green-600',
    error: 'text-red-200 bg-red-600',
    warning: 'text-yellow-200 bg-yellow-600'
  };

  return (
    <div className={`flex justify-between shadow-inner rounded p-3 ${typeClasses[type]}`}>
      <p className="self-center">
        <strong>{type.charAt(0).toUpperCase() + type.slice(1)} </strong>{message}
      </p>
      <strong className="text-xl align-center cursor-pointer alert-del" onClick={onClose}>
        &times;
      </strong>
    </div>
  );
};

export default Alert;
