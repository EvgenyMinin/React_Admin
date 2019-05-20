let maxId = 1;
const createUser = (email,
    status = 'Активен',
    type = 'Клиент',
    subpay = 0,
    balance = 0,
    phone,
    password,
    business,
    isBlock = false,
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
        isBlock,
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
const getUsersFromLS = () => JSON.parse(localStorage.getItem('users'));

const getInitialUsers = () => {
    const users = getUsersFromLS();
    return users ? users : initialUsers;
};

export {
    createUser,
    saveUsersToLS,
    getInitialUsers
}