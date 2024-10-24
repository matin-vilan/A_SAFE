"use client";
import React, { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Modal = ({
  isOpen,
  onClose,
  children,
  wrapperClassName,
  rootClassName,
  rootStyles,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  wrapperClassName?: string;
  rootClassName?: string;
  rootStyles?: React.CSSProperties;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className={twMerge(
          "bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3 p-6 relative",
          rootClassName
        )}
        style={rootStyles}
      >
        <div className={wrapperClassName}>{children}</div>

        <button
          onClick={onClose}
          className="absolute z-10 top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
