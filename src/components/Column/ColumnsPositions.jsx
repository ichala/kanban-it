import React, { useContext } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { BsArrowsMove, BsCircleFill } from 'react-icons/bs';
import { StorageContext } from '../../config/Context/storage';
import StrictModeDroppable from '../../config/StrictModeDropable';

const ColumnsPositions = () => {
  const { StorageData, setStorageData } = useContext(StorageContext);
  const UpdateColumns = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newData = Array.from(StorageData);
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);
    setStorageData([...newData]);
  };

  return (
    <>
      <h1 className="text-xl text-center font-thin  ">Edit Columns Order</h1>
      <small className="text-center text-sm italic font-thin  mb-3">Drag and Drop to change order</small>
      <DragDropContext onDragEnd={UpdateColumns}>
        <StrictModeDroppable droppableId="ColumnEdit">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className="flex flex-col  gap-3  p-1 ">
                {StorageData.map((column, index) => (
                  <Draggable key={column.id} draggableId={column.id} index={index}>
                    {(provided) => (
                      <div
                        className="flex items-center justify-between p-4 bg-base-300  rounded-lg shadow-md cursor-move"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="flex items-center gap-3">
                          <BsCircleFill color={column.color} />
                          <span>
                            {column.title.slice(0, 20)}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BsArrowsMove />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}

              </div>
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </>
  );
};

export default ColumnsPositions;
