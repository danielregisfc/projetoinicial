document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("loginModal");
    const loginLink = document.getElementById("login-link"); // Link de Entrar
    const closeModal = document.querySelector(".close-btn");
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");

    // Modal começa invisível
    modal.style.display = "none";

    // Abre o modal quando o link de "Entrar" for clicado
    loginLink.addEventListener("click", (event) => {
        event.preventDefault();  // Impede o link de navegar
        modal.style.display = "flex";  // Exibe o modal
    });

    // Fecha o modal ao clicar no botão X
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";  // Esconde o modal
    });

    // Fecha o modal ao clicar fora da área do modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";  // Esconde o modal
        }
    });

    // Quando o formulário for enviado (sem validar senha)
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Impede o envio real do formulário

        // Pega o nome de usuário digitado
        let username = usernameInput.value;
        console.log("Login Efetuado");
        console.log(username);
        // Redireciona para a página de boas-vindas com o nome como parâmetro na URL
 
        console.log('Redirecionando para:'); // Verifique o URL que está sendo gerado
        window.open('boas-vindas.html?nome=' + encodeURIComponent(username));
       // window.open(url, '_blank');

        // window.open('/public/boas-vindas.html?nome=' + encodeURIComponent(username), '_blank');
        //window.location.href = '/boas-vindas.html?nome=${encodeURIComponent(username)}';
        //window.location.href = '/public/boas-vindas.html?nome=' + encodeURIComponent(username);
        // console.log("Após redirecionamento");
        // modal.style.display = "none";
        // console.log("Modal Fechado");
        // console.log('/boas-vindas.html?nome=' + encodeURIComponent(username))

    });
});
