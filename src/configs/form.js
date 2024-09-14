const REGISTRATION_INPUT = [
    {
        id : "name",
        label : "Name",
        required : true,
        type : "texr"
    },
    {
        id : "email",
        label : "Email",
        required : true,
        type : "email"
    },
    {
        id : "password",
        label : "Password",
        required : true,
        type : "password"
    },
    {
        id : "confirmation-password",
        label : "Confirmation Password",
        required : true,
        type : "password"
    }
]

const LOGIN_INPUT = [
    {
        id : "email",
        label : "Email",
        required : true,
        type : "email"
    },
    {
        id : "password",
        label : "Password",
        required : true,
        type : "password"
    }
]

export {REGISTRATION_INPUT, LOGIN_INPUT};