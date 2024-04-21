export default function Reset({ labelInput, labelResult, onResetInput, onResetResult }) {
    return (
        <div className="resetFrame">
            <button type="button" className="resetBtn" onClick={onResetInput}>
                {labelInput}
            </button>
            <button type="button" className="resetBtn" onClick={onResetResult}>
                {labelResult}
            </button>
        </div>
    );
}
