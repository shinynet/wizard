import {Children, cloneElement, createContext, useState} from 'react'
import {Box, Divider} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'

export const WizardContext = createContext()

const WizardDrawer = props => {
	const {children, close, open, setChildren, wizardData} = props

	const [currentStep, setCurrentStep] = useState(0)
	const [title, setTitle] = useState('')
	const [data, setData] = useState(wizardData)

	const next = () => setCurrentStep(prevStep => prevStep + 1)
	const prev = () => setCurrentStep(prevStep => prevStep - 1)

	const handleClose = () => {
		setCurrentStep(0)
		setTitle('')
		setData(wizardData)
		close()
	}

	const components = Children.toArray(children)
		.map(child => cloneElement(child, {
			close: handleClose,
			next,
			prev,
			setChildren,
			setTitle
		}))

	return (
		<Drawer anchor="right" open={open}>
			<Box p={1}>
				<h1>{title}</h1>
				<Divider/>
				<WizardContext.Provider value={{data, setData}}>
					{components[currentStep]}
				</WizardContext.Provider>
			</Box>
		</Drawer>
	)
}

export default WizardDrawer
