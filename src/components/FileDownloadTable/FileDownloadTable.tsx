import './FileDownloadTable.scss';

import type { File } from '../../types';

import { FileDownloadTableRow } from '../';

export const FileDownloadTable = ({ files, handleSelectFile }: FileDownloadTableProps) => {
  return (
    <table className="file-download-table">
      <thead>
        <tr>
          <th className="file-download-table__head"></th>
          <th className="file-download-table__head">Name</th>
          <th className="file-download-table__head">Device</th>
          <th className="file-download-table__head">Path</th>
          <th className="file-download-table__head">Status</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file: File, index: number) => (
          <FileDownloadTableRow file={file} key={index} handleSelectFile={handleSelectFile} />
        ))}
      </tbody>
    </table>
  );
};

interface FileDownloadTableProps {
  files: File[];
  handleSelectFile: (file: File) => void;
}
