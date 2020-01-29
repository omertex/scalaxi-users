const data = [
    { id: 100001, userName: "dkhanevich", firstName: "Dmitry", lastName: "K.", roles:["manager"], password: "123" },
    { id: 100002, userName: "avanushin", firstName: "Andrey", lastName: "V.", roles:["developer"], password: "123", managerId:  100001 },
    { id: 100003, userName: "kdrobysh", firstName: "Kristina", lastName: "D.", roles:["developer"], password: "123", managerId:  100006 },
    { id: 100004, userName: "ilemeshonok", firstName: "Ivan", lastName: "L.", roles:["developer"], password: "123", managerId:  100001 },
    { id: 100005, userName: "galina", firstName: "Galina", lastName: "B.", roles:["manager"], password: "123" },
    { id: 100006, userName: "artem", firstName: "Artem", lastName: "K.", roles:["manager"], password: "123" },
];

module.exports = {
    data
}