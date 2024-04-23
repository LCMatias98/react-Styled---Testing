import styled from 'styled-components';
import { Container, Row, Col } from './Components/layout/Base';
import { useState } from 'react';
import TaskForm from './Components/TaskForm/TaskForm';
import Task from './Components/Tasks/Task';

const Alert = styled.span`
  display: block;
  background: tomato;
  width: 100%;
`;

const Title = styled.h1`
  color: red;
  height: 90px;
`;

// Estilo a componente Row
//const AppRow = styled(Row)`
//  justify-content: ${props => props.justify || 'flex-start'}; /* Definir justify-content según la prop o usar 'flex-start' por defecto */
//  margin-bottom: ${props => props.mb || 0}px; /* Definir margin-bottom según la prop o usar 0px por defecto */
 // background: pink;
//`;

function App() {
  // Este es mi estado original
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const addTask = (task) =>{
    setTasks([...tasks,task]);
  };

  const deleteTask = (id) =>{
   console.log(id);
   const finalTask = tasks.filter((task) => task.id !== id);
   setTasks(finalTask);
  };
  
  return (
    <Container>
      <Row mb={20} justify="center">
        <Col size={6}>
          <TaskForm addTask={addTask}/>
        </Col>
        <Col size={6}>
          <Task tasks={tasks} deleteTask={deleteTask}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
