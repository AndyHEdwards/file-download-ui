import { useState } from 'react';

import './FileDownload.scss';

import type { File } from '../../types';

import { FileDownloadActions, FileDownloadTable } from '../';

export const FileDownload = ({ files: initialFiles }: FileDownloadProps) => {
  const [files, setFiles] = useState<File[]>(initialFiles.map((file) => ({ ...file, selected: false })));

  const availableFiles = files.filter((file) => file.status === 'available');

  const handleSelectFile = (selectedFile: File) => {
    setFiles((previousFiles) =>
      previousFiles.map((file) => (file.path === selectedFile.path ? { ...file, selected: !file.selected } : file))
    );
  };

  const handleSelectAllFiles = () => {
    const allAvailableSelected = availableFiles.every((file) => file.selected);

    setFiles((previousFiles) =>
      previousFiles.map((file) => (file.status === 'available' ? { ...file, selected: !allAvailableSelected } : file))
    );
  };

  return (
    <section className="file-download">
      <FileDownloadActions
        handleSelectAllFiles={handleSelectAllFiles}
        numberOfFilesAvailable={availableFiles.length}
        numberOfFilesSelected={files.filter((file) => file.selected).length}
      />

      <FileDownloadTable files={files} handleSelectFile={handleSelectFile} />
    </section>
  );
};

interface FileDownloadProps {
  files: File[];
}
