import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import Horizon from '@horizon/client'

render(
	<App />, 
	document.body.appendChild(document.createElement('div'))
)