const formatarDinheiro = (valor: number): string => {
    return valor.toLocaleString(
        'pt-br',
        { 
            style: 'currency',
            currency: 'BRL'
        });
};

export default formatarDinheiro;