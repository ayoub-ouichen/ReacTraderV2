import { useEffect, useState } from "react";
import { plotlyData } from "../features/plotlyData/plotlyDataSlice";
import { useAppSelector } from "../hooks";
import { SideBarParam } from "../features/sidebar/sidebarSlice";

export default function ObjecToForm() {
  const plt_data = useAppSelector(plotlyData)
  const SideBarParams = useAppSelector(SideBarParam)
  const [obj, setObj] = useState(Object)

  useEffect(() => {
    if (plt_data.data.length > 0) {
      setObj(plt_data.data[SideBarParams.actualObjectIndex])
    }
  }, [plt_data.data, SideBarParams.actualObjectIndex])
  

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    let objCopy = { ...obj }
    objCopy[name] = value
  }

  function handleOnSubmit() {
    // To synchron Changed object with ChartBody that contain the Displayed Object 
    console.log('synchron object');
    
  }

  function jsonToForm(element: any): any {
    var htmlForm = []
    const jsonArray = Object.keys(element).map((key) => [key, obj[key]])
    
    for (let index = 0; index < jsonArray.length; index++) {
      const property = jsonArray[index];
      console.log(property);
      
      if (! Array.isArray(property[1]) && typeof property[1] != 'object') {
        console.log(! Array.isArray(property[1]) , typeof property[1] != 'object');
        
        htmlForm.push(
          <div className="m-2" key={index} style={{width: '100%'}}>
              <label className="fw-bold form-label" htmlFor={property[0]}>{property[0] + ' :'}</label>
              <br />
              <input
                  type="text"
                  id={property[0]}
                  name={property[0]}
                  value={property[1]}
                  onChange={handleOnChange}
                  className="form-control"
              />
          </div>
        ) 
      } else if (! Array.isArray(property[1]) && typeof property[1] === 'object') {
        htmlForm.push(Object.keys(property[1]).map((key) => (
          <div className="m-2" key={key} style={{width: '100%'}}>
              <label className="fw-bold form-label" htmlFor={key}>{key + ' :'}</label>
              <br />
              <input
                  type="text"
                  id={key}
                  name={key}
                  value={property[1][key]}
                  onChange={handleOnChange}
                  className="form-control"
              />
          </div>
        )))
      }
    }
    return htmlForm
  }
  
  // function getFormData(object: any) {
  //   const formData = new FormData();
  //   Object.keys(object).forEach(key => formData.append(key, object[key]));
  //   return formData;
  // }


  return (
    <>
    <div className="input-group">
      {
          jsonToForm(obj)
            // Object.keys(obj).map((key) => (! Array.isArray(obj[key])) && (
            //   <div className="m-2" key={key} style={{width: '100%'}}>
            //       <label className="fw-bold form-label" htmlFor={key}>{key + ' :'}</label>
            //       <br />
            //       <input
            //           type="text"
            //           id={key}
            //           name={key}
            //           value={obj[key]}
            //           onChange={handleOnChange}
            //           className="form-control"
            //       />
            //   </div>
            // ))
      }
    </div>
    <div className="text-center">
      <button className="btn btn-primary m-4" onClick={handleOnSubmit} >D'accord</button>
    </div>
    </>
  )
}
