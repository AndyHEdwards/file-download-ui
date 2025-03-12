import './FileDownloadTable.scss';

import type { File } from '../../types';

export const FileDownloadTable = ({ files }: FileDownloadTableProps) => {
  return (
    <table className="file-download-table">
      <thead>
        <tr>
          <th className="file-download-table__head">Name</th>
          <th className="file-download-table__head">Device</th>
          <th className="file-download-table__head">Path</th>
          <th className="file-download-table__head">Status</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file: File, index: number) => (
          <tr key={index}>
            <td>{file.name}</td>
            <td>{file.device}</td>
            <td>{file.path}</td>
            <td>{file.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface FileDownloadTableProps {
  files: File[];
}
