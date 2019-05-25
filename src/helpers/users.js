let maxId = 1;
const createUser = (email,
    status = 'Активен',
    type = 'Клиент',
    subpay = 0,
    balance = 0,
    phone,
    password,
    business,
    managerName = '',
    managerPhone = '',
    managerEmail = '',
    ) => {
    return {
        id: maxId++,
        email,
        status,
        type,
        subpay,
        balance,
        phone,
        password,
        business,
        managerName,
        managerPhone,
        managerEmail
    }
};

const initialUsers = [
    createUser('tu@mail.ru'),
    createUser('market@yandex.ru'),
    createUser('michail@mail.ru'),
    createUser('pro@example.ru'),
    createUser('user2@list.ru'),
];

const saveUsersToLS = users => localStorage.setItem('users', JSON.stringify(users));
const getUsersFromLS = () => JSON.parse(localStorage.getItem('users')) || initialUsers;

const getInitialUsers = () => {
    const users = getUsersFromLS();
    const ids = users.map(u => u.id);
    maxId = (Math.max.apply(null, ids) || 1) + 1;
    return users ? users : initialUsers;
};

export {
    createUser,
    saveUsersToLS,
    getInitialUsers
}