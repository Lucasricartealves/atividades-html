// Função para exibir o nome do time
function showTeamName(button) {
    let row = button.parentElement.parentElement;
    let teamName = row.getElementsByTagName("a")[0].innerHTML;
    
    alert("O time selecionado é: " + teamName);
    console.log("O time selecionado é: " + teamName);
}

// Função para alterar a cor de todas as linhas da tabela
function changeColor() {
    let rows = document.querySelectorAll("tr");
    
    rows.forEach(row => {
        row.style.backgroundColor = row.style.backgroundColor === "lightblue" ? "" : "lightblue";
    });
}

// Função para alterar a cor de uma linha específica
function changeColorWithId(rowId) {
    let row = document.getElementById(rowId);
    row.style.backgroundColor = row.style.backgroundColor === "lightcoral" ? "" : "lightcoral";
}
