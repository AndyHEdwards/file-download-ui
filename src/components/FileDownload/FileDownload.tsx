import './FileDownload.scss';

import type { File } from '../../types';

import { FileDownloadActions, FileDownloadTable } from '../';

export const FileDownload = ({ files: initialFiles }: FileDownloadProps) => {
  return (
    <section className="file-download">
      <FileDownloadActions />
      <FileDownloadTable files={initialFiles} />
    </section>
  );
};

interface FileDownloadProps {
  files: File[];
}
