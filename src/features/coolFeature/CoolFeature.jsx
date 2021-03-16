import {useState} from 'react'
import {Button} from '@material-ui/core'
import WizardDrawer from 'app/WizardDrawer'
import Step0 from './wizard/Step0'

const wizardData = {
	name: '',
	wizardType: ''
}

const CoolFeature = () => {
	const [wizardOpen, setWizardOpen] = useState(false)
	const [children, setChildren] = useState(<Step0 key="step0"/>)

	const handleOpen = () => setWizardOpen(true)
	const handleClose = () => setWizardOpen(false)

	return (
		<>
			<Button variant="contained" onClick={handleOpen}>
				Open Wizard
			</Button>

			<WizardDrawer
				close={handleClose}
				open={wizardOpen}
				setChildren={setChildren}
				wizardData={wizardData}>
				{children}
			</WizardDrawer>
		</>
	)
}

export default CoolFeature
