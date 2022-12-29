import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillKanbanFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BackupRestore from '../../../components/Backup/BackupRestore';
import BackupStats from '../../../components/Backup/BackupStats';
import BackupUpdate from '../../../components/Backup/BackupUpdate';
import { AuthContext } from '../../../config/Context/auth';
import { StorageContext } from '../../../config/Context/storage';
import { db } from '../../../config/firebase';

const Backup = () => {
  const { currentUser } = useContext(AuthContext);
  const { StorageData, setStorageData } = useContext(StorageContext);
  const [Backup, setBackup] = useState(null);
  const [Loading, setLoading] = useState(true);
  const fetchData = async () => {
    const docRef = doc(db, 'backup', currentUser.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBackup(docSnap.data());
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  async function createBackup() {
    toast.loading('Creating Backup...');
    await setDoc(doc(db, 'backup', currentUser.id), {
      StorageData,
      createdAt: new Date(),
    })
      .then(() => {
        fetchData();
        toast.dismiss();
        toast.success('Backup Created');
      })
      .catch(() => {
        toast.dismiss();
        toast.error('Error Happened,Try Again');
      });
  }
  const restoreBackup = async () => {
    toast.loading('Restoring Backup...');
    const docRef = doc(db, 'backup', currentUser.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBackup(docSnap.data());
      setStorageData(Backup.StorageData);
      toast.dismiss();
      toast.success('Backup Restored');
      setLoading(false);
    } else {
      toast.dismiss();
      toast.error('Error Happened,Try Again');
      setLoading(false);
    }
  };
  const updateBackup = async () => {
    toast.loading('Updating Backup...');
    await setDoc(doc(db, 'backup', currentUser.id), {
      StorageData,
      createdAt: new Date(),
    })
      .then(() => {
        fetchData();
        toast.dismiss();
        toast.success('Backup Updated');
      })
      .catch(() => {
        toast.dismiss();
        toast.error('Error Happened,Try Again');
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-5xl flex flex-col justify-center items-center">
        <div className="modal-body  ">
          {Loading ? (
            <>
              <h1 className="animate-bounce   text-4xl  flex gap-2 items-center  font-bold text-center mb-4 cursor-pointer">
                <BsFillKanbanFill className="animate-pulse text-primary" />
              </h1>
            </>
          ) : (
            <>
              {Backup && (
                <BackupStats Image={currentUser.image} Backup={Backup} />
              )}
              <div className="flex flex-col w-full border-opacity-50">
                {Backup ? (
                  <>
                    <BackupUpdate
                      updateBackup={updateBackup}
                      current={StorageData}
                      online={Backup.StorageData}
                    />
                    <div className="divider">OR</div>
                    <BackupRestore
                      restoreBackup={restoreBackup}
                      current={StorageData}
                      online={Backup.StorageData}
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-xl font-bold text-center mb-4"> No Backups Found</h1>
                    <button
                      onClick={() => createBackup()}
                      type="button"
                      className="btn btn-md btn-success"
                    >
                      Create Backup
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <div className="modal-action">
          <Link className="btn btn-sm" to="/">
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Backup;
