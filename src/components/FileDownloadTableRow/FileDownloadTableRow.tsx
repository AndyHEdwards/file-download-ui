import './FileDownloadTableRow.scss';

import { File } from '../../types';
import { capitaliseFirstLetter } from '../../utils';

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
      <td className="file-download-table-row__status">
        {isFileAvailable ? <span className="file-download-table-row__status-icon"></span> : ''}
        {capitaliseFirstLetter(file.status)}
      </td>
    </tr>
  );
};

interface FileDownloadTableRowProps {
  file: File;
  handleSelectFile: (file: File) => void;
}
