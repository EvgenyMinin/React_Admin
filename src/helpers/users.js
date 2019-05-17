let maxId = 1;

const createUser = (email, status = 'Активен', type = 'Клиент', subpay = 0, balance = 0, phone, password, business) => {
    return {
        id: maxId++,
        email,
        status,
        type,
        subpay,
        balance,
        phone,
        password,
        business
    }
};

const initialUsers = [
    createUser('tu@mail.ru'),
    createUser('market@yandex.ru'),
    createUser('michail@mail.ru'),
    createUser('pro@example.ru'),
    createUser('user2@list.ru'),
];

const getInitialUsers = () => {
    return initialUsers;
};

export {
    createUser,
    getInitialUsers
}