import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Table } from 'react-bootstrap';
import PropTypes from "prop-types";

const Task = ({tasks, deleteTask}) => {

    const removeTask = (id) => {
        deleteTask(id);
    };

    return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Descripcion</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task,id)=>(
             <tr key={id}>
                 <td>{task.id}</td>
                 <td>{task.name}</td>
                 <td>{task.description}</td>
                 <td onClick={() => removeTask(task.id)}>Eliminar</td>
             </tr>
        ))}
      </tbody>
    </Table>
    </>

    );

};

Task.propTypes = {
tasks: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
}).isRequired,
};

export default Task;
//<>