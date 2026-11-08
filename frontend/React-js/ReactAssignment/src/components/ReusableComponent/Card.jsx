
function Card({ children }) {
    return (
       <>
        <h1>Task 15: Card Component with Children</h1>
        <div className="card">
            {children}
        </div>
       </>
    );
}

export default Card;
