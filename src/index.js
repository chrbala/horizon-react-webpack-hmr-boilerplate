import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import Horizon from '@horizon/client'

var horizon = Horizon()

const start = () => render(
	<App horizon={horizon}/>, 
	document.body.appendChild(document.createElement('div'))
)

horizon.onReady(() => {
	console.log('ready')
	start()
})

horizon.connect()