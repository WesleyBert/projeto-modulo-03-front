const handleRegister = async(e) => {
    e.preventDefault();

    try {
        const { data } = await UserService.registerUser(emailRegister, passwordRegister);
        alert(`Email ${emailRegister}, cadastrado com sucesso!`);
        setShow(false);
    } catch (error) {
        console.log('teste');
    }
}

const loginUser = async (e) => {
    e.preventDefault();
    try {
        const { data } = await UserService.loginUser(email, password);
        if (data?.email === email && data?.senha === password) {
            setUserInfo(data);
            navigate("/home");
        }
    } catch (error) {
        alert('Usuário ou senha invalidos, por favor tente novamente')
    }
}