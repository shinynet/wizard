import {useContext} from 'react'
import {Button, FormControlLabel, Radio, RadioGroup} from '@material-ui/core'
import {WizardContext} from 'app/WizardDrawer'
import Step from 'features/coolFeature/wizard/Step0'
import StepA1 from 'features/coolFeature/wizard/StepA1'
import StepA2 from 'features/coolFeature/wizard/StepA2'
import StepB1 from 'features/coolFeature/wizard/StepB1'

const Step0 = props => {
	const {next, setChildren} = props

	const {data, setData} = useContext(WizardContext)

	const disableSubmit = !data.wizardType

	const handleWizardTypeChange = event => {
		const wizardType = event.currentTarget.value
		setData(prevData => ({...prevData, wizardType}))
		setChildren(wizardType === 'A' ? [
			<Step key="step0"/>,
			<StepA1 key="stepA1"/>,
			<StepA2 key="stepA2"/>
		] : [
			<Step key="step0"/>,
			<StepB1 key="stepB1"/>
		])
	}

	return (
		<>
			<RadioGroup
				name="wizardType"
				value={data.wizardType}
				onChange={handleWizardTypeChange}>
				<FormControlLabel value="A" control={<Radio/>} label="Wizard A"/>
				<FormControlLabel value="B" control={<Radio/>} label="Wizard B"/>
			</RadioGroup>

			<Button disabled={disableSubmit} variant="contained" onClick={next}>
				Continue
			</Button>
		</>
	)
}
export default Step0
