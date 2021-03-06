import Horizon from '@horizon/client'
import { Connector } from 'horizon-react'

import store from 'store'

import TodoList from 'TodoList'
 
export default () =>
	<Connector store={store} horizonProps={{}}>
		<TodoList />
	</Connector>