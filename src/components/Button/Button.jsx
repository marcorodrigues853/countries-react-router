import './Button.css';
function Button({ children, variant = 'success', size }) {
    return (
        <div className={`button type-${variant} size-${size}`}>{children}</div>
    );
}

export default Button;
