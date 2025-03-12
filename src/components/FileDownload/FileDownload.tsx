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

  const handleFilesDownload = () => {
    const downloadList = availableFiles.reduce((fileList, { selected, device, path }) => {
      if (selected) {
        fileList.push(`${device}: ${path}`);
      }
      return fileList;
    }, [] as string[]);

    if (downloadList.length > 0) {
      alert(downloadList.join('\r\n'));
    } else {
      alert('No files selected for download');
    }
  };

  return (
    <section className="file-download">
      <FileDownloadActions
        handleSelectAllFiles={handleSelectAllFiles}
        handleFilesDownload={handleFilesDownload}
        numberOfFilesAvailable={availableFiles.length}
        numberOfFilesSelected={files.filter((file) => file.selected).length}
      />

      <div className="file-download__table-wrapper">
        <FileDownloadTable files={files} handleSelectFile={handleSelectFile} />
      </div>
    </section>
  );
};

interface FileDownloadProps {
  files: File[];
}
