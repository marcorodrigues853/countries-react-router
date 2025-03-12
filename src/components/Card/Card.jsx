function Card({ children, layout = 'squared', color }) {
    return (
        <div className={`card ${layout}`} style={{ backgroundColor: color }}>
            {children}
        </div>
    );
}

export default Card;
