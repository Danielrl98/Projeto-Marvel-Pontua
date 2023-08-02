let enviromnent=`production`

let path = `/public`

if(enviromnent == `production`){
    path = ``
}

const theme = {
    color: {
        white: `#ffffff`,
        black: `#000000`,
        divider: `#ebeff2`,
        blue800: `#00113d`,
        blue600: `#213770`,
        blue500: `#293D71`,
        blue200: `#747d94`,
        orange400: `#f43724`,
        orange500: `#f21a05`,
        orange700: `#F21A05`,
        grayBackground: `#f5f6f8`,
        gray100: `#eaecf0`,
        gray150:`#FBFBFB`,
        gray300: `#D0D5DD`,
        gray400: `##B7B7B7`,
        gray500:`#777777`,
        gray900: `##101828`
    },
    fonts: {
        epilogue: `Epilogue`,
        inter: `"Inter", sans-serif`
    },
    logo: `${path}/assets/img/logo.svg`,
    logoWhite: `${path}/assets/img/logo-white.svg`,
    imgs:{
        build: `${path}/assets/img/build.svg`
    },
    icons:{
        home: `${path}/assets/icons/home.svg`,
        perfil:  `${path}/assets/icons/perfil.svg`,
        sair: `${path}/assets/icons/sair.svg`,
        search: `${path}/assets/icons/search.svg`,
        arrowLeft: `${path}/assets/icons/arrow-left.svg`,
        arrowRight: `${path}/assets/icons/arrow-right.svg`,
        arrowWhite: `${path}/assets/icons/arrow-right-white.svg`,
        inputLogin: `${path}/assets/icons/input-login.svg`,
        inputSenha: `${path}/assets/icons/input-senha.svg`,
        forgotPassword: `${path}/assets/icons/forgot-password.svg`,
        user: `${path}/assets/icons/user.svg`,
        arrowDown: `${path}/assets/icons/arrow-down.svg`,
        arrowUP: `${path}/assets/icons/arrow-up.svg`
    }

}
export default theme 