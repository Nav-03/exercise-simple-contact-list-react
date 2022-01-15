import React, { useState } from "react";

import ContactCard from "./ContactCard.jsx";
import AddContact from "./AddContact.jsx";

const Home = () => {
	const [contacts, setContacts] = useState([]);

	const saveContact = (contactToSave) => {
		setContacts(contacts.concat(contactToSave));
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<AddContact onSave={saveContact} />
					<button type="button" className="btn btn-success" to="/add">
						Add new contact
					</button>
				</p>
				<div
					id="contacts"
					className="panel-collapse collapse show"
					aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{contacts.map((c) => (
							<ContactCard contact={c} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
