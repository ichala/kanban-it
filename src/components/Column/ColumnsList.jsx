import { useContext } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
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
      const sourceColIndex = StorageData.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = StorageData.findIndex((e) => e.id === destination.droppableId);
      const sourceCol = StorageData[sourceColIndex];
      const destinationCol = StorageData[destinationColIndex];
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      StorageData[sourceColIndex].tasks = sourceTask;
      StorageData[destinationColIndex].tasks = destinationTask;
      setStorageData([...StorageData]);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {StorageData.map((item) => (
          <StrictModeDroppable
            key={item.id}
            droppableId={item.id}
          >
            {(provided) => (
              <div
                key={item.id}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Column color={item.color} id={item.id}>
                  {item.tasks.map((task, index) => (
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
                          <Card />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                </Column>
              </div>
            )}
          </StrictModeDroppable>
        ))}
      </DragDropContext>
      <NewColumn />
    </>
  );
};

export default ColumnsList;
