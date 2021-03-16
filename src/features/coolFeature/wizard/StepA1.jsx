import {useContext, useEffect} from 'react'
import {Box, Button, TextField} from '@material-ui/core'
import {WizardContext} from 'app/WizardDrawer'

const StepA1 = props => {
	const {next, prev, setTitle} = props

	const {data, setData} = useContext(WizardContext)

	const handleNameChange = event => {
		const name = event.currentTarget.value
		setData(prevData => setData({...prevData, name}))
	}

	useEffect(() => {
		setTitle('Step A-1')
	}, [setTitle])

	return (
		<>
			<Box m={1}>
				<TextField
					label="Name"
					value={data.name}
					variant="outlined"
					onChange={handleNameChange}/>
			</Box>

			<div>
				<Button variant="contained" onClick={prev}>
					Back
				</Button>
				<Button variant="contained" onClick={next}>
					Continue
				</Button>
			</div>
		</>
	)
}
export default StepA1
