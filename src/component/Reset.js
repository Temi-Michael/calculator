export default function Reset({ labelInput, labelResult }) {
    return (
        <div className="resetFrame">
            <button type="button" className="resetBtn">
                {labelInput}
            </button>
            <button type="button" className="resetBtn">
                {labelResult}
            </button>
        </div>
    );
}
