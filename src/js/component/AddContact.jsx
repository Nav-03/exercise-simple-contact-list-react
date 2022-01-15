import React, { useState } from "react";

const AddContact = (props) => {
	const [contact, setContact] = useState({});
	const [email, setEmail] = useState({});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={(e) =>
								setContact({
									...contact,
									fullName: e.target.value,
								})
							}
							value={contact.fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={(e) =>
								setEmail({
									...email,
									fullEmail: e.target.value,
								})
							}
							value={email.fullEmail}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						type="button"
						onClick={() => props.onSave(contact, email)}
						className="btn btn-primary form-control">
						save
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddContact;
