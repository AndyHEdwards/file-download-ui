import './FileDownloadTableRow.scss';

import { File } from '../../types';

export const FileDownloadTableRow = ({ file, handleSelectFile }: FileDownloadTableRowProps) => {
  const isFileAvailable = file.status === 'available';

  return (
    <tr
      onClick={() => isFileAvailable && handleSelectFile(file)}
      className={`file-download-table-row ${file.selected && 'selected'} ${isFileAvailable && 'available'}`}
    >
      <td>
        <input type="checkbox" checked={file.selected} readOnly disabled={!isFileAvailable} />
      </td>
      <td>{file.name}</td>
      <td>{file.device}</td>
      <td>{file.path}</td>
      <td className="download-table-row__status">{file.status}</td>
    </tr>
  );
};

interface FileDownloadTableRowProps {
  file: File;
  handleSelectFile: (file: File) => void;
}
