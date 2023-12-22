import TodoNav from "../components/header/TodoNav";
import TodoBoard from "../pages/todo/TodoBoard";

const TodoLayout = () => {
    return (
        <div >
            <div className="max-w-[1500px] mx-auto px-5">
                <TodoNav />
            </div>
            <div className="bg-[#FAFAFA] w-full h-screen">
                <div className="max-w-[1500px] mx-auto px-5 py-2">
                    <TodoBoard />
                </div>
            </div>
        </div>
    );
};

export default TodoLayout;