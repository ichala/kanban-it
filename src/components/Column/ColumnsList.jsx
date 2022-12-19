import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Card from '../Card/Card';
import Column from './Column';
import NewColumn from './NewColumn';
import mockData from '../../config/fake';

const ColumnsList = () => {
  const [data, setData] = useState(mockData);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex((e) => e.id === destination.droppableId);
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;
      setData(data);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.map((item) => (
          <Droppable
            key={item.id}
            droppableId={item.id}
          >
            {(provided) => (
              <div
                key={item.id}
                {...provided.droppableProps}
                className="kanban__section"
                ref={provided.innerRef}
              >
                <Column>
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
          </Droppable>
        ))}
      </DragDropContext>
      <NewColumn />
    </>
  );
};

export default ColumnsList;
