const formatarData = (data: string): string => {
    const dataFormatada = new Date(data),
        dia = dataFormatada.getDate() > 9 ? dataFormatada.getDate() : `0${dataFormatada.getDate()}`,
        mes = dataFormatada.getMonth() + 1 > 9 ? dataFormatada.getMonth() + 1 : `0${dataFormatada.getMonth() + 1}`,
        ano = dataFormatada.getFullYear();

        return `${dia}/${mes}/${ano}`
};

export default formatarData;