import {useContext, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {WizardContext} from 'app/WizardDrawer'

const StepB1 = props => {
	const {close, prev, setTitle} = props

	const {data} = useContext(WizardContext)

	useEffect(() => {
		setTitle('Step B-2')
	}, [setTitle])

	return (
		<>
			<h2>
				Wizard Type: {data.wizardType}
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
export default StepB1
