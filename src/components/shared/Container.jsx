
const Container = ({ children }) => {
    console.log(children)
    return (
        <div className="max-w-[1560px] bg-red-500">
            {children}
        </div>
    );
};

export default Container;