import './FileDownload.scss';

import type { File } from '../../types';

export const FileDownload = ({ files: initialFiles }: FileDownloadProps) => {
  return (
    <section className="file-download">
      {initialFiles.map((file) => (
        <p>
          {file.name} + {file.path} + {file.device} + {file.status}
        </p>
      ))}
    </section>
  );
};

interface FileDownloadProps {
  files: File[];
}
