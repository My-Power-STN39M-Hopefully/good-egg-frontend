import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CreateIncident.css';

class CreateIncident extends Component {
	constructor() {
		super();
		this.state = {
			category: '',
			officers: '',
			officer_description: '',
			description: '',
			date: '',
			time: '',
			location: '',
			formal_complaint: false,
			formal_complaint_number: '',
			witnesses_present: false,
			witnesses_information: '',
			private: false,
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	handleInputChange = (event) => {
		if (
			event.target.id === 'formal_complaint' ||
			event.target.id === 'witnesses_present' ||
			event.target.id === 'private'
		) {
			event.target.value === 'on'
				? (event.target.value = true)
				: (event.target.value = false);
		}
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newIncident = {
			category: this.state.category,
			officers: this.state.officers,
			officer_description: this.state.officer_description,
			description: this.state.description,
			date: this.state.date,
			time: this.state.time,
			location: this.state.location,
			formal_complaint: this.state.formal_complaint,
			formal_complaint_number: this.state.formal_complaint_number,
			witnesses_present: this.state.witnesses_present,
			witnesses_information: this.state.witnesses_information,
			private: this.state.private,
		};
	};

	render() {
		return (
			<div className='create-form'>
				<h1>Incident Form</h1>
				<Form className='incidentForm' onSubmit={this.handleSubmit}>
					<Form.Group controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Control
							as='select'
							defaultValue='Category...'
							onChange={this.handleInputChange}>
							<option>Choose...</option>
							<option>Conduct Unbecoming (Off Duty)</option>
							<option>Criminal Misconduct</option>
							<option>Domestic</option>
							<option>Lockup Procedures</option>
							<option>Operation / Personnel Violations</option>
							<option>Supervisory Responsibilities</option>
							<option>Traffic</option>
							<option>Verbal Abuse</option>
							<option>Use of Force</option>
							<option>Drug / Alcohol Abuse</option>
							<option>Bribery / Official Corruption</option>
							<option>Illegal Search</option>
							<option>Praise</option>
							<option>OTHER</option>
						</Form.Control>
					</Form.Group>
					{this.state.category === 'OTHER' && (
						<Form.Group controlId='category_description'>
							<Form.Control
								type='text'
								placeholder='Please Enter New Category'
								onChange={this.handleInputChange}></Form.Control>
						</Form.Group>
					)}

					<Form.Group controlId='officers'>
						<Form.Label>Officer</Form.Label>
						<Form.Control
							as='select'
							defaultValue='Choose...'
							onChange={this.handleInputChange}>
							<option>Choose...</option>
							<option>Unknown</option>
							<option>John Smith</option>
							<option>Robert Jend</option>
							<option>Daniel Brooks</option>
							<option>John Martinez</option>
						</Form.Control>
					</Form.Group>

					{this.state.officers === 'Unknown' && (
						<Form.Group controlId='officer_description'>
							<Form.Control
								type='text'
								placeholder='Please Enter Description of Officer'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					)}

					<Form.Group controlId='description'>
						<Form.Label>Incident Description</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId='date'>
							<Form.Label>Date</Form.Label>
							<Form.Control type='date' onChange={this.handleInputChange} />
						</Form.Group>

						<Form.Group as={Col} controlId='time'>
							<Form.Label>Time</Form.Label>
							<Form.Control type='time' onChange={this.handleInputChange} />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId='location'>
						<Form.Label>Location</Form.Label>
						<Form.Control
							type='textarea'
							placeholder='Location of Incident'
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId='formal_complaint'>
						<Form.Check
							type='checkbox'
							label='I filed a formal police complaint'
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='formal_complaint_number'>
							<Form.Control
								placeholder='Formal Complaint Number'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>

					<Form.Group controlId='witnesses_present'>
						<Form.Check
							type='checkbox'
							label='There were witnesses'
							onChange={this.handleInputChange}
						/>
						<Form.Group controlId='witnesses_information'>
							<Form.Control
								as='textarea'
								rows='3'
								placeholder='Witness Information'
								onChange={this.handleInputChange}
							/>
						</Form.Group>
					</Form.Group>
					<Form.Group controlId='private'>
						<Form.Check
							type='checkbox'
							label='Keep Private'
							onChange={this.handleInputChange}
						/>
					</Form.Group>
					<button>Submit</button>
				</Form>
			</div>
		);
	}
}
export default CreateIncident;
