const Header = (props) => {
  console.log(props);
  return(
  <>
    <h1>Course: {props.name.courseName}</h1>
  </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>{props.part.parts[props.element].Name} -  Number of Exercises: {props.part.parts[props.element].exercises}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <p> Total Number of exercises: {(props.total.parts[0].exercises)+(props.total.parts[1].exercises)+(props.total.parts[2].exercises)}</p>
    </>
  )
}
const course = {
  courseName: 'Half Stack application development',
  parts: [
    {
      Name: 'Fundamentals of React',
      exercises: 10
    },
    {
      Name:  'Using props to pass data',
      exercises: 7
    },
    {
      Name:  'State of a component',
      exercises: 14
    }

  ]
}
  

const App = () => (
  <div>
    <Header name= {course} />
    <Content part={course} element='0'/>
    <Content part={course} element = '1' />
    <Content part={course} element = '2'/>

    <Total total={course}/>

  </div>
)

export default App 