class CampanhaAntirracismo {
    constructor(id, nome, descricao) {
        this.id = id; 
        this.nome = nome; 
        this.descricao = descricao;
        this.data = new Date().toLocaleString(); 
    }
}

export default CampanhaAntirracismo;