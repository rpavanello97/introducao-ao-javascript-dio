var Bacen = {
    "Resumo_do_Cliente_14_Data_Bases_PJ": {
        "Prejuízo_de_dívida_vencida_da_empresa": false,
            "modalidades_da_carteira_de_crédito": [
                8
            ],
            "coobrigação_recebida_da_empresa_em_R$": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "operações_com_manifestação_de_discordância": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
    }
}

console.log(Bacen.Resumo_do_Cliente_14_Data_Bases_PJ["operações_com_manifestação_de_discordância"] !== undefined);

console.log("operações_com_manifestação_de_discordância" in Bacen.Resumo_do_Cliente_14_Data_Bases_PJ);

if ("teste" in Bacen.Resumo_do_Cliente_14_Data_Bases_PJ) {
    console.log("Passou aqui")
}