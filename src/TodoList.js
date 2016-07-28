import { subscribe } from 'horizon-react'

var Todo = ({value, remove}) => 
	<li>
		{value}
		<button onClick={remove}>X</button>
	</li>

class AddTodo extends Component {
	constructor() {
		super()
		this.state = { value: '' }
	}

	handleChange({target: { value }}) {
		this.setState({value})
	}

	handleClick() {
		var { value } = this.state
		var { Todos } = this.props

		Todos.store({value})
		value = ''
		this.setState({value})
	}

	render() {
		var { value } = this.state

		return <div>
				<input value={value} onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleClick.bind(this)}>Save</button>
			</div>
	}
}

var TodoList = ({todos, horizon}) => {
	var Todos = horizon('Todos')

	return <ul>
    {todos.map(({id, value}) => 
    	<Todo key={id} value={value} remove={() => Todos.remove(id)} />)}
    <AddTodo Todos={Todos} />
  </ul>
}

var mapDataToProps = {
  todos: hz => hz('Todos')
}
 
export default subscribe({
  mapDataToProps
})(TodoList)