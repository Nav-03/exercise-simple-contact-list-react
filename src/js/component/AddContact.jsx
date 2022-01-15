import React, { useState } from "react";

const AddContact = (props) => {
	const [contact, setContact] = useState({});

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
								setContact({
									...contact,
									fullEmail: e.target.value,
								})
							}
							value={contact.fullEmail}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={(e) =>
								setContact({
									...contact,
									phoneNumber: e.target.value,
								})
							}
							value={contact.phoneNumber}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={(e) =>
								setContact({
									...contact,
									fullAddress: e.target.value,
								})
							}
							value={contact.fullAddress}
						/>
					</div>
					<button
						type="button"
						onClick={() => props.onSave(contact)}
						className="btn btn-primary form-control">
						save
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddContact;
