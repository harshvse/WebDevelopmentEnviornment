const Header = (props) => {
  return(
  <>
    <h1>Course: {props.name}</h1>
  </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>{props.part} -  Number of Exercises: {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <p> Total Number of exercises: {props.total}</p>
    </>
  )
}

const courseName = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

const App = () => (
  <div>
    <Header name= {courseName} />
    <Content part={part1} exercises={exercises1} />
    <Content part={part2} exercises={exercises2} />
    <Content part={part3} exercises={exercises3} />
    <Total total={exercises1+exercises2+exercises3} />

  </div>
)

export default App 