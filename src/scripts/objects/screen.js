const screen = {
    userprofile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userprofile.innerHTML = `<div class="info">
                                <img src="${user.avatarUrl}" alt="foto do perfil do usuário"/>               
                                <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                    <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                
                                    <div class="followers">
                                        <p><span>Seguidores: </span>${user.followers ?? "0"}</p>
                                        <p><span>Seguindo: </span>${user.following ?? "0"}</p>
                                    </div>
                                </div>
                            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
            <a href="${repo.html_url}" target="_blank">  ${repo.name} <p>
                    <i class="fas fa-code-branch"></i>  ${repo.forks}
                    <i class="fas fa-star" style="color: #FFD43B;"></i>  ${repo.stargazers_count}
                    <i class="fas fa-eye"></i>  ${repo.watchers}
                    <i class="fas fa-code"></i>  ${repo.language ?? "0"} 
                </p>
            </a> 
        </li>`)
        
        if (user.repositories.length > 0) {
            this.userprofile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let listEvents = ''
        const noCommit = "Sem mensagem de commit"
        user.events.forEach(list => {
            listEvents += `<li>${list.repo.name} - ${list.payload.commits[0].message}</li>`
        })
        console.log(listEvents);
        
        

        if (user.events.length > 0) {
        this.userprofile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2>
                                            <ul>${listEvents}</ul>
                                        </div>`
                                }
    },
    renderNotFound() {
        this.userprofile.innerHTML = "<h3>Usuário não encontrado😯</h3>"
    }
}

export { screen }