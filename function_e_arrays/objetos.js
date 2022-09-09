let user = {
    username: "Matheus",
    idade: 17,
    seguidores: 2,
    seguindo: 10,
    exibeInformacoes: function(){
        console.log("Nome: " + this.username)
        console.log("Idade: " + this.idade)
        console.log("Seguidores: " + this.seguidores)
        console.log("Seguindo: " + this.seguindo)
    }
}

//user.exibeInformacoes()
//console.table(user)