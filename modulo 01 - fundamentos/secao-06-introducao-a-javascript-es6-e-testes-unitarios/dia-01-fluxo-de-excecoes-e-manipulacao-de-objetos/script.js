/* Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. */

const order = {
	name: 'Rafael Andrade',
	phoneNumber: '11-98763-1416',
	address: {
		street: 'Rua das Flores',
		number: '389',
		apartment: '701',
	},
	order: {
		pizza: {
			marguerita: {
				amount: 1,
				price: 25,
			},
			pepperoni: {
				amount: 1,
				price: 20,
			},
		},
		drinks: {
			coke: {
				type: 'Coca-Cola Zero',
				price: 10,
				amount: 1,
			},
		},
		delivery: {
			deliveryPerson: 'Ana Silveira',
			price: 5,
		},
	},
	payment: {
		total: 60,
	},
};

const customerInfo = (order) => {
	/* Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'. */
	const deliveryPerson = order.order.delivery.deliveryPerson;
	const customerName = order.name;
	const customerTelephone = order.phoneNumber;
	const customerStreetAddress = order.address.street;
	const customerStreetNumber = order.address.number;
	const customerApartment = order.address.apartment;
	console.log(
		`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerTelephone}, ${customerStreetAddress}, Nº: ${customerStreetNumber}, AP: ${customerApartment}`
	);
};

customerInfo(order);

const orderModifier = (order) => {
	/* Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'; */
	/* Modifique o nome da pessoa compradora para Luiz Silva; */
	order.name = 'Luiz Silva';
	order.payment.total = 50;
	const newCustomer = order.name;
	const pizzaFlavours = Object.keys(order.order.pizza);
	const pizzaFlavourOne = pizzaFlavours[0];
	const pizzaFlavourTwo = pizzaFlavours[1];
	const beverage = order.order.drinks.coke.type;
	/* Modifique o valor total da compra para R$ 50,00. */
	order.payment.total = 50;
	newTotalPrice = order.payment.total;
	console.log(
		`Olá ${newCustomer}, o total do seu pedido de ${pizzaFlavourOne}, ${pizzaFlavourTwo} e ${beverage} é R$ ${newTotalPrice},00.`
	);
};

orderModifier(order);
