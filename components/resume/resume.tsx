"use client";

import { useState } from "react";
import "@/components/resume/resume.css";

interface ResumeModalProps {
  pdfUrl: string;
}
const ResumeModal: React.FC<ResumeModalProps> = ({ pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <button className="open-button" onClick={openModal}>
        View Resume
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <iframe
              src="/resume.pdf"
              className="modal-iframe"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeModal;
