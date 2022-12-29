import React from 'react';

import _ from 'lodash';

const BackupUpdate = ({ updateBackup, current, online }) => (
  <>
    {_.isEqual(current, online)
      ? (
        <button
          type="button"
          disabled
          className="btn btn-md btn-success"
        >
          Backup is up to date
        </button>

      ) : (
        <button
          onClick={updateBackup}
          type="button"
          className="btn btn-md btn-success"
        >
          Update Backup
        </button>
      )}
  </>
);

export default BackupUpdate;
