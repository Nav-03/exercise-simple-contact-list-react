import React, { useState } from "react";

import ContactCard from "./ContactCard.jsx";
import AddContact from "./AddContact.jsx";

const Home = () => {
	const [contacts, setContacts] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const saveContact = (contactToSave) => {
		setModalIsOpen(false);
		setContacts(contacts.concat(contactToSave));
	};
	const deleteContact = (contactToDelete) => {
		setContacts(
			contacts.filter((item, index) => contactToDelete !== index)
		);
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					{modalIsOpen === true ? (
						<AddContact onSave={saveContact} />
					) : (
						<button
							type="button"
							className="btn btn-success"
							onClick={() => setModalIsOpen(true)}>
							Add new contact
						</button>
					)}
				</p>
				<div
					id="contacts"
					className="panel-collapse collapse show"
					aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{contacts.map((c, i) => (
							<ContactCard
								contact={c}
								onDelete={() => deleteContact(i)}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
