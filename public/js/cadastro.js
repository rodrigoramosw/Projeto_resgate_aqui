document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do formulário de cadastro de pessoa
    const userForm = document.getElementById("user-form");

    // Seleciona os elementos do formulário de cadastro de animal
    const animalTypeSelect = document.getElementById("animal-type");
    const dogForm = document.getElementById("dog-form");
    const catForm = document.getElementById("cat-form");
    const submitAnimalButton = document.getElementById("submit-animal");

    // Alternar entre os formulários de cachorro e gato
    animalTypeSelect.addEventListener("change", () => {
        if (animalTypeSelect.value === "dog") {
            dogForm.classList.remove("d-none");
            catForm.classList.add("d-none");
        } else if (animalTypeSelect.value === "cat") {
            catForm.classList.remove("d-none");
            dogForm.classList.add("d-none");
        } else {
            dogForm.classList.add("d-none");
            catForm.classList.add("d-none");
        }
    });

    // Envio do formulário de pessoa
    userForm.addEventListener("submit", event => {
        // Impede o envio padrão do formulário se houver erros de validação
        if (!userForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Previne o comportamento padrão do formulário
            event.preventDefault();

            // Captura os dados do formulário de pessoa
            const formData = new FormData(userForm);
            const userData = Object.fromEntries(formData.entries());

            // Exibe os dados enviados em um alerta
            alert(`Pessoa cadastrada com sucesso!\nDados enviados:\n${JSON.stringify(userData, null, 2)}`);
            console.log("Dados da pessoa:", userData);

            // Limpa o formulário após o envio (opcional)
            userForm.reset();
        }

        // Adiciona a classe 'was-validated' para ativar feedback visual de validação
        userForm.classList.add("was-validated");
    });

    // Envio do formulário de animal
    submitAnimalButton.addEventListener("click", event => {
        event.preventDefault();

        let animalData = {};

        if (animalTypeSelect.value === "dog") {
            animalData = {
                type: "Cachorro",
                name: document.getElementById("dog-name").value,
                breed: document.getElementById("dog-breed").value,
                age: document.getElementById("dog-age").value,
                weight: document.getElementById("dog-weight").value,
                height: document.getElementById("dog-height").value,
                gender: document.getElementById("dog-gender").value,
                vaccinated: document.getElementById("dog-vaccinated").value,
                neutered: document.getElementById("dog-neutered").value,
                size: document.getElementById("dog-size").value,
                color: document.getElementById("dog-color").value,
                health: document.getElementById("dog-health").value,
                personality: document.getElementById("dog-personality").value,
                behavior: document.getElementById("dog-behavior").value,
                notes: document.getElementById("dog-notes").value
            };
        } else if (animalTypeSelect.value === "cat") {
            animalData = {
                type: "Gato",
                name: document.getElementById("cat-name").value,
                breed: document.getElementById("cat-breed").value,
                age: document.getElementById("cat-age").value,
                weight: document.getElementById("cat-weight").value,
                height: document.getElementById("cat-height").value,
                gender: document.getElementById("cat-gender").value,
                vaccinated: document.getElementById("cat-vaccinated").value,
                neutered: document.getElementById("cat-neutered").value,
                size: document.getElementById("cat-size").value,
                color: document.getElementById("cat-color").value,
                health: document.getElementById("cat-health").value,
                personality: document.getElementById("cat-personality").value,
                behavior: document.getElementById("cat-behavior").value,
                notes: document.getElementById("cat-notes").value
            };
        }

        // Verifica se o formulário está válido antes de enviar
        const currentForm = animalTypeSelect.value === "dog" ? dogForm : catForm;
        if (!currentForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Exibe os dados do animal cadastrado
            alert(`Animal cadastrado com sucesso!\nDados enviados:\n${JSON.stringify(animalData, null, 2)}`);
            console.log("Dados do animal:", animalData);

            // Limpa o formulário
            if (animalTypeSelect.value === "dog") {
                dogForm.reset();
            } else if (animalTypeSelect.value === "cat") {
                catForm.reset();
            }
        }

        // Adiciona a classe 'was-validated' para ativar feedback visual de validação
        currentForm.classList.add("was-validated");
    });
});