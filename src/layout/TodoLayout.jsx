import { useState } from "react";
import TodoNav from "../components/header/TodoNav";
import TodoBoard from "../pages/todo/TodoBoard";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const TodoLayout = () => {
    const [addFormShowModal, setAddFormShow] = useState(false);
    const addShowModal = {
        addFormShowModal,
        setAddFormShow
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div >
                <div className="max-w-[1500px] mx-auto px-5">
                    <TodoNav addShowModal={addShowModal} />
                </div>
                <div className="bg-[#FAFAFA] w-full h-screen">
                    <div className="max-w-[1500px] mx-auto px-5 py-2">
                        <TodoBoard addModalShow={addShowModal} />
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default TodoLayout;