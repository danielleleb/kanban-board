import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { KanbanCard } from "./KanbanTask";
import { initialData } from '../mocks/initialData';

export const KanbanColumn = ({ column, tasks }) => {
    const { id, title, } = column;

    return (
        <>
            <div>
                <h2>{title}</h2>
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{
                                background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                                padding: 4,
                                width: 250,
                                minHeight: 200
                            }}
                        >
                            {tasks.map((task, index) => (
                                <KanbanCard key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </>
    )
    
}