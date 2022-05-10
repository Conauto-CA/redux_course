export const COLLECTIONS = {
    USERS: `users`,
    TODOS: `todos`
}

export const ROLES = {
    ADMIN: `admin`,
    SELLER: `seller`
}

export const MENUBAR = [
    {

        id: `0`,
        label: `Inicio`,
        path: `/`
    }
    , {
        id: `1`,
        label: `Todo`,
        path: `/todo`
    },
]

export const SUBMENU = [
    {
        id: '0',
        label:`Registro`,
        path:`/register`
    },
    {
        id: '1',
        label:`Ingresar`,
        path:`/login`
    },
    {
        id: '2',
        label:`Contáctanos`,
        path:`/contactus`
    }
]

export const ENTERPRISE_NAME = `CONAUTO C.A.`;