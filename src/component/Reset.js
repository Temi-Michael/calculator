export default function Reset({ labelInput, labelResult, reset, onReset, onResetInput, onResetResult }) {
    return (
        <div className="resetFrame">
            <button type="button" className="resetBtn" onClick={onResetInput}>
                {labelInput}
            </button>
            <button type="button" className="resetBtn" onClick={onResetResult}>
                {labelResult}
            </button>
            <button type="button" className="resetBtn" onClick={onReset}>
                {reset}
            </button>
        </div>
    );
}
