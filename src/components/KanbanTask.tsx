import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export const KanbanCard = ({ task, index }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Draggable
            key={task.id}
            draggableId={task.id}
            index={index}
        >
        {(provided, snapshot) => (
            <div
                onClick={() => console.log("clicked")}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                minHeight: "50px",
                backgroundColor: snapshot.isDragging
                    ? "#263B4A"
                    : "#456C86",
                color: "white",
                ...provided.draggableProps.style
                }}
            >
                {task.content}
            </div>
        )}
    </Draggable>
    )
}