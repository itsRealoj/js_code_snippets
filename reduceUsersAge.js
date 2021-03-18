const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersAge = users.reduce((obj, user) => {
	obj[user.name] = user.age;
	return obj;
}, {})

console.log(usersAge)