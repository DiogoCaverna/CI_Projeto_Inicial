describe('Teste Go App', () => {
    
    let alunoId;

    it('Retorna todos os alunos', ()=>{ 
    cy.request({
        method: 'GET',
        url: '/alunos'
    }).then((response)=>{
        expect(response.status).to.eq(200)
        console.log(response.body)
    })
})

    it('Adiciona um aluno', ()=>{
        cy.request({
        method: 'POST',
        url: '/alunos',
        body:{
            "nome":"Diogo",
	        "rg":"123456789",
	        "cpf":"12345456787",
        }
    }).then((response)=>{
        expect(response.status).to.eq(201)
        console.log(response.body.ID)
        console.log(response.body.nome)
        alunoId = response.body.ID
    })
})

    it('Retorna um aluno pelo Id', ()=>{
        cy.request({
            method: 'GET',
            url: `/alunos/${alunoId}`
        }).then((response)=>{
            //expect(response.status).to.eq(200)
            console.log(response.body)
        })
    })

    it('Atualiza um aluno', ()=>{
        cy.request({
            method: 'PATCH',
            url: `/alunos/${alunoId}`,
            body:{
                "nome":"Diogo Guma Caverna",
            }    
        }).then((response)=>{
            expect(response.status).to.eq(200)
            console.log(response.body)
        })
    })

    it('Deleta um aluno', ()=>{
        cy.request({
            method: 'DELETE',
            url: `/alunos/${alunoId}`   
        }).then((response)=>{
            expect(response.status).to.eq(200)
            console.log(response.body)
        })
    })
    
    
})
