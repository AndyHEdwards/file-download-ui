import { useRef } from 'react';

import './FileDownloadActions.scss';

export const FileDownloadActions = ({
  handleSelectAllFiles,
  numberOfFilesAvailable,
  numberOfFilesSelected,
}: FileDownloadActionsProps) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  if (checkboxRef.current) {
    checkboxRef.current.indeterminate = numberOfFilesSelected > 0 && numberOfFilesSelected < numberOfFilesAvailable;
  }

  return (
    <section className="file-download-actions">
      <label htmlFor="selectAllFiles" className="file-download-actions__select-all">
        <input
          onChange={handleSelectAllFiles}
          type="checkbox"
          id="selectAllFiles"
          name="selectAllFiles"
          checked={numberOfFilesSelected === numberOfFilesAvailable}
          ref={checkboxRef}
          aria-checked={numberOfFilesSelected === numberOfFilesAvailable}
        />
        {numberOfFilesSelected ? `Selected ${numberOfFilesSelected}` : 'None Selected'}
      </label>

      <button className="file-download-actions__download-button">Download Selected</button>
    </section>
  );
};

interface FileDownloadActionsProps {
  handleSelectAllFiles: () => void;
  numberOfFilesAvailable: number;
  numberOfFilesSelected: number;
}
