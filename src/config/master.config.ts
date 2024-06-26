import dotenv from 'dotenv';
dotenv.config();

let config = {
    tokenTypes: {
        access: 'access',
        refresh: 'refresh'
    },

    tokenExpirations: {
        access: '1d',
        refresh: '14d'
    },

    roles: {
        admin: "admin",
        employee: "employee",
        projectManager: "projectManager",
        departmentManager: "departmentManager",
    },

    registrationMethods: {
        email: 'email',
    }
};

export default config;