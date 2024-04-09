import { useState } from "react";

interface MyComponentProps {
    object: Record<string, any>;
}

export default function ObjecToForm({object}: MyComponentProps) {
  const [obj, setObj] = useState(object)

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    let objCopy = { ...obj }
    objCopy[name] = value
    setObj(objCopy)
  }

  function handleOnSubmit() {
    // To synchron Changed object with ChartBody that contain the Displayed Object 
    console.log('synchron object');
    
  }

  return (
    <>
    <div className="input-group">
      {
            Object.keys(obj).map((key) => (! Array.isArray(obj[key])) && (
              
              <div className="m-2" key={key} style={{width: '100%'}}>
                  <label className="fw-bold form-label" htmlFor={key}>{key + ' :'}</label>
                  <br />
                  <input
                      type="text"
                      id={key}
                      name={key}
                      value={obj[key]}
                      onChange={handleOnChange}
                      className="form-control"
                  />
              </div>
            ))
      }
    </div>
    <div className="text-center">
      <button className="btn btn-primary m-4" onClick={handleOnSubmit} >D'accord</button>
    </div>
    </>
  )
}
