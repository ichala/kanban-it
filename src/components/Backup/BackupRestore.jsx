import React from 'react';
import _ from 'lodash';

const BackupRestore = ({ restoreBackup, current, online }) => (
  <>
    {_.isEqual(current, online)
      ? (
        <button
          type="button"
          disabled
          className="btn btn-md btn-success"
        >
          Restore Backup
        </button>

      ) : (
        <button
          onClick={restoreBackup}
          type="button"
          className="btn btn-md btn-warning"
        >
          Restore Backup
        </button>
      )}
  </>

);

export default BackupRestore;
