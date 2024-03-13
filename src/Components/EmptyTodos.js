import '../Styles/EmptyTodos.css';

const emptyMessage ={
  display: 'flex',
  justifyContent: 'center',
  color: '#61DAFA',
  fontSize: '20px',
  marginTop: '40px',
  marginBottom: '40px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '3px'
}

function EmptyTodos() {
  
  return(
    <p style={emptyMessage}>Create your first Task</p>
  )
}

export {EmptyTodos};