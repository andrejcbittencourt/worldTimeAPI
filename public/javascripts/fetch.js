fetch("https://worldtimeapi.org/api/ip", {mode: "no-cors"})
	.then(response => response.json())
  .then(data => {
		const fragment = document.createDocumentFragment();
		// card
		const card = document.createElement('div');
		card.className = 'card';
		// card > body
		const cardBody = document.createElement('div');
		cardBody.className = 'card-body';
		// card > body > title
		const cardBodyTitle = document.createElement('h5');
		cardBodyTitle.className = 'card-title';
		cardBodyTitle.innerText = `Public IP: ${data.client_ip}`;
		// card > list-group
		const cardListGroup = document.createElement('ul');
		cardListGroup.className = 'list-group list-group-flush';
		// card > list-group > list-group-item > API components
		// date/time
		let cardListGroupItem = document.createElement('li');
		cardListGroupItem.className = 'list-group-item';
		const dateTime = new Date(data.datetime);
		cardListGroupItem.innerText = `Date/Time: ${dateTime.getDate()}/${dateTime.getMonth()}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`;
		cardListGroup.appendChild(cardListGroupItem);
		// timezone
		cardListGroupItem = document.createElement('li');
		cardListGroupItem.className = 'list-group-item';
		cardListGroupItem.innerText = `Timezone: ${data.timezone}`;
		cardListGroup.appendChild(cardListGroupItem);
		// utc offset
		cardListGroupItem = document.createElement('li');
		cardListGroupItem.className = 'list-group-item';
		cardListGroupItem.innerText = `UTC Offset: ${data.utc_offset}`;
		cardListGroup.appendChild(cardListGroupItem);
		// week number
		cardListGroupItem = document.createElement('li');
		cardListGroupItem.className = 'list-group-item';
		cardListGroupItem.innerText = `Week Number: ${data.week_number}`;
		cardListGroup.appendChild(cardListGroupItem);
		// day of the year
		cardListGroupItem = document.createElement('li');
		cardListGroupItem.className = 'list-group-item';
		cardListGroupItem.innerText = `Day of Year: ${data.day_of_year}`;
		cardListGroup.appendChild(cardListGroupItem);
		
		// append all elements to the virtual DOM
		cardBody.appendChild(cardBodyTitle);
		card.appendChild(cardBody);
		card.appendChild(cardListGroup);
		fragment.appendChild(card);

		// append the virtual DOM to the page
		const divApiInfo = document.querySelector('div.api_info');
		divApiInfo.appendChild(fragment);
	});