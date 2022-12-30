import { useContext } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Card from '../Card/Card';
import Column from './Column';
import NewColumn from './NewColumn';
import { StorageContext } from '../../config/Context/storage';
import StrictModeDroppable from '../../config/StrictModeDropable';

const ColumnsList = () => {
  const { StorageData, setStorageData } = useContext(StorageContext);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = StorageData.findIndex(
        (e) => e.id === source.droppableId,
      );
      const destinationColIndex = StorageData.findIndex(
        (e) => e.id === destination.droppableId,
      );
      const sourceCol = StorageData[sourceColIndex];
      const destinationCol = StorageData[destinationColIndex];
      const sourceTask = [...sourceCol.cards];
      const destinationTask = [...destinationCol.cards];
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      StorageData[sourceColIndex].cards = sourceTask;
      StorageData[destinationColIndex].cards = destinationTask;
      setStorageData([...StorageData]);
    }
  };
  return (
    <>
      <div className="flex  gap-3">
        <DragDropContext onDragEnd={onDragEnd}>
          {StorageData.map((item, index) => (
            <StrictModeDroppable key={item.id} droppableId={item.id}>
              {(provided) => (
                <div
                  key={item.id}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{

                      x: 0,
                      zIndex: -1,
                    }}
                    transition={{
                      duration: 1 + index * 0.1,

                    }}
                  >
                    <Column data={item}>
                      {item.cards.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                opacity: snapshot.isDragging ? '0.3' : '1',
                              }}
                            >
                              <Link to={`/${task.id}/view`}>

                                <Card data={task} />

                              </Link>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Column>
                  </motion.div>
                </div>
              )}
            </StrictModeDroppable>
          ))}
        </DragDropContext>
        <NewColumn />
      </div>
    </>
  );
};

export default ColumnsList;
