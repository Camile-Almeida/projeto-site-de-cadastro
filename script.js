const form = document.getElementById("form");
const username = document.getElementById("username");
const CPF = document.getElementById("CPF");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const telefone = document.getElementById("telefone");
const banco = document.getElementById("banco");
const conta = document.getElementById("conta");
const agencia = document.getElementById("agencia");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
    
})

function checkInputUsername()
{
const usernameValue = username.value;
if(usernameValue === ""){
    errorInput(username, "Preencha um nome!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}

function checkInputCPF()
{
const CPFValue = CPF.value;
if(CPFValue === ""){
    errorInput(CPF, "Preencha um CPF!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}

function checkInputemail()
{
const emailValue = email.value;
if(emailValue === ""){
    errorInput(email, "Preencha um email!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}

function checkInputendereco()
{
const enderecoValue = endereco.value;
if(enderecoValue === ""){
    errorInput(endereco, "Preencha um endereço!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}

function checkInputtelefone()
{
const telefoneValue = telefone.value;
if(telefoneValue === ""){
    errorInput(telefone, "Preencha um telefone!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}

function checkInputpassword(){
    const passwordValue= password.value;
    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no  mínimo 8 caracteres.")
    }else {
        formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
    }
    }  
    

function checkInputPasswordConfirmation(){
    const passwordValue= password.value;
    const confirmationPasswordValue= passwordConfirmation.value;
    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas precisam ser iguais.")
    }else{
        formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
    }
    }      

function checkInputbanco()
{
const bancoValue = banco.value;
if(bancoValue === ""){
    errorInput(banco, "Preencha o nome do banco!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}    

function checkInputagencia()
{
const agenciaValue = agencia.value;
if(agenciaValue === ""){
    errorInput(agencia, "Preencha o número da agência!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}  

function checkInputconta()
{
const contaValue = conta.value;
if(contaValue === ""){
    errorInput(conta, "Preencha o número da conta!")
}else{
    formItem.classList.remove("error");
    formItem.querySelector("p").innerText="";
}
}  

function checkForm(){
    checkInputUsername();
    checkInputCPF();
    checkInputemail();
    checkInputendereco();
    checkInputtelefone();
    checkInputpassword();
    checkInputPasswordConfirmation();
    checkInputbanco();
    checkInputconta();
    checkInputagencia();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every( (item) => {
        return !item.classList.contains("error");
    });
    
    if(isValid){
        alert("CADASTRADO COM SUCESSO!");
    } else{
        alert("Preencha todos os campos corretamente.");
    }
   
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p")
    textMessage.innerText = message;
    formItem.className = "form-content error"

}
