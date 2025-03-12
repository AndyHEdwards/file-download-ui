import './FileDownloadActions.scss';

export const FileDownloadActions = () => {
  return (
    <section className="file-download-actions">
      <label htmlFor="selectAllFiles" className="file-download-actions__select-all">
        <input type="checkbox" id="selectAllFiles" name="selectAllFiles" />
        None Selected
      </label>

      <button className="file-download-actions__download-button">Download Selected</button>
    </section>
  );
};
