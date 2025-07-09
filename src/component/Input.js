import '../App.css'

export default function Input({ values, onChanges }) {
    return (
        <div className='inputFrame'>
            <input type='number' name='value1' className='input' placeholder='First Number' value={values.value1} onChange={onChanges} /><br></br><br></br>
            <input type='number' name='value2' className='input' placeholder='Second Number' value={values.value2} onChange={onChanges} ></input><br></br><br></br>
        </div>
    )
}