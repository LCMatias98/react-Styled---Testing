import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
const TaskForm = ({addTask}) => {


    const handleAddTask = (e) =>{
        e.preventDefault();
        const [taskName, taskDescription] = e.target.elements;
        addTask({
          id:uuidv4(),
          name: taskName.value,
          description: taskDescription.value.trim(),
        });
    }
    return (
        <>
          <h3>🔥🔥</h3>
          <Form onSubmit={handleAddTask}>
            <Form.Group>
                <Form.Label>Nombre de la Tarea</Form.Label>
                <Form.Control type='text' name='taskName' placeholder='Nombre Tarea'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Descripcion de la Tarea</Form.Label>
                <Form.Control as='textarea' name='taskDescription' rows={3}></Form.Control>
            </Form.Group>

            <Button type='submit'>Guardar Tarea</Button>
          </Form>
        </>
    
        )
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
//<>handleAddTask