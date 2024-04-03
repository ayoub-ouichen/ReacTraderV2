export default function ChartSideBar() {
  const person: any = {
    firstname: 'ayoub',
    age: 25,
    job: 'developer'
  };
  Object.keys(person).forEach((key) => {
    console.log(key + ' : ' + person[key]);
    
  })
  
  return (
    <></>
  )
}
