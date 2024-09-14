import '../App.css'

export default function Add({onClick, label}) {
    return (
        <button type="button" className="operation" id='operation' onClick={onClick}>{ label }</button>
    )
}