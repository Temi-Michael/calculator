import '../App.css'

export default function Input({ value1, value2, onChange1, onChange2 }) {
    return (
        <div className='inputFrame'>
            <input type='number' className='input' placeholder='First Number' value={value1} onChange={onChange1} /><br></br><br></br>
            <input type='number' className='input' placeholder='Second Number' value={value2} onChange={onChange2} ></input><br></br><br></br>
        </div>
    )
}