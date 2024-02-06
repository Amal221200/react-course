

const CopyEvent = () => {
    return (<p onCopy={(e) => {
        alert("Copy Cat")
        e.stopPropagation()
    }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, neque odio assumenda dolore ipsa laudantium! Cumque laudantium fugiat ad at.
    </p>);
}

export default CopyEvent;