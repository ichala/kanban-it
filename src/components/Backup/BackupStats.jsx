import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { BsCardList, BsLayoutThreeColumns } from 'react-icons/bs';

const BackupStats = ({ Backup, Image }) => {
  const [BackupData, setBackupData] = useState(Backup.StorageData);
  const CountCards = BackupData.reduce((acc, cur) => acc + cur.cards.length, 0);
  const CountTasks = BackupData.reduce(
    (acc, cur) => acc + cur.cards.reduce((acc, cur) => acc + cur.tasks.length, 0),
    0,
  );
  const CountDoneTasks = BackupData.reduce(
    (acc, cur) => acc
      + cur.cards.reduce(
        (acc, cur) => acc + cur.tasks.filter((task) => task.completed).length,
        0,
      ),
    0,
  );
  const CountDoneTasksPercentage = Math.round(
    (CountDoneTasks / CountTasks) * 100,
  ) || 0;

  useEffect(() => {
    setBackupData(Backup.StorageData);
  }, [Backup]);

  return (
    <>
      {BackupData && (
        <div className="stats bg-base-300 my-2 stats-vertical md:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <BsLayoutThreeColumns className="h-8 w-8" />
            </div>
            <div className="stat-title text-base-content">Total Columns</div>
            <div className="stat-value text-primary">{BackupData.length}</div>
            <div className="stat-desc text-base-content">
              Backup Created
              {' '}
              {moment().startOf(Backup.created_at).fromNow()}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <BsCardList className="h-8 w-8" />
            </div>
            <div className="stat-title">Total Cards</div>
            <div className="stat-value text-secondary">{CountCards}</div>
            <div className="stat-desc">
              {CountTasks}
              {' '}
              Total tasks found
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-base-content">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img alt="UserImage" src={Image} />
                </div>
              </div>
            </div>
            <div className="stat-value">
              {CountDoneTasksPercentage}
              %
            </div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-base-content">
              {CountTasks - CountDoneTasks}
              {' '}
              tasks remaining
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackupStats;
