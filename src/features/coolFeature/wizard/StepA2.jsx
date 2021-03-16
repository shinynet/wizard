import {useContext, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {WizardContext} from 'app/WizardDrawer'

const StepA2 = props => {
	const {close, prev, setTitle} = props

	const {data} = useContext(WizardContext)

	useEffect(() => {
		setTitle('Step A-2')
	}, [setTitle])

	return (
		<>
			<h2>
				Wizard Type: {data.wizardType}<br/>
				Name: {data.name}
			</h2>

			<div>
				<Button variant="contained" onClick={prev}>
					Back
				</Button>
				<Button variant="contained" onClick={close}>
					Done
				</Button>
			</div>
		</>
	)
}
export default StepA2
