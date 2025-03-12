import './FileDownload.scss';

import type { File } from '../../types';

import { FileDownloadTable } from '../FileDownloadTable/FileDownloadTable';

export const FileDownload = ({ files: initialFiles }: FileDownloadProps) => {
  return (
    <section className="file-download">
      <FileDownloadTable files={initialFiles} />
    </section>
  );
};

interface FileDownloadProps {
  files: File[];
}
