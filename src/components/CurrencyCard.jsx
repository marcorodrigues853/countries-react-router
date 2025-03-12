import './currency.css';
function CurrencyCard({ children }) {
    return (
        <div className="currency">
            <span>🪙</span>
            <span>{children}</span>
        </div>
    );
}

export default CurrencyCard;
