function getLsProdutos() {
    return lsProdutos = [
        { "cod": "01", "valor": 10, "valorT": 15, "descricao": "pão, salsicha Perdigão, presunto, mussarela, milho, tomate, batata palha e maionese.", "grupo": "Salsicha na Chapa", "tipo": "HOTDOG", "qt": 0, "qtTrio": 0 },
        { "cod": "02", "valor": 10, "valorT": 17, "descricao": "pão, salsicha perdigão, presunto, mussarela, milho, tomate, bacon e maionese.", "grupo": "Salsicha na Chapa", "tipo": "HOTDOG", "qt": 0, "qtTrio": 0  },
        { "cod": "03", "valor": 12, "valorT": 18, "descricao": "pão, filé de frango, bacon, mussarela, maionese, milho, tomate, alface e cebola roxa.", "grupo": "Frango na Chapa", "tipo": "HOTDOG", "qt": 0, "qtTrio": 0   },
        { "cod": "04", "valor": 17, "valorT": 19, "descricao": "Bomba de frango, pão, 2 filé de frango, 2 queijos mussarela, salsicha Perdigão, calabresa, bacon, maionese, milho, tomate.", "grupo": "Frango na Chapa", "tipo": "HOTDOG", "qt": 0, "qtTrio": 0   },
        { "cod": "05", "valor": 13, "valorT": 17, "descricao": "pão, filé minon, bacon, mussarela, maionese, milho, tomate, alface e cebola roxa.", "grupo": "Filé Mignon na Chapa", "tipo": "HOTDOG", "qt": 0, "qtTrio": 0   },
        { "cod": "06", "valor": 17, "valorT": 16, "descricao": "Bomba de filé mignon, pão, 2 filé de carne, 2 queijos mussarela, salsicha Perdigão, calabresa, bacon, maionese, milho, tomate.", "grupo": "Filé Mignon na Chapa", "tipo": "HOTDOG", "qt": 0, "qtTrio": 0   },
        { "cod": "07", "valor": 17, "valorT": 19, "descricao": "X Filé Frango - Pão, filé de frando, queijo, presunto, ovo, bacon, salada, cebola roxa e maionese.", "grupo": "Sanduiches Especiais", "tipo": "FILÉ", "qt": 0, "qtTrio": 0   },
        { "cod": "08", "valor": 17, "valorT": 23, "descricao": "X Filé Carne - Pão, filé de mignon, queijo, presunto, ovo, bacon, salada, cebola roxa e maionese.", "grupo": "Sanduiches Especiais", "tipo": "ARTESANAL", "qt": 0, "qtTrio": 0   },
        { "cod": "09", "valor": 7, "valorT": 14, "descricao": "Over kids: Pão, hamburguer, queijo e maionese.", "grupo": "Over Burguer", "tipo": "Gourmet 100g", "qt": 0, "qtTrio": 0   },
        { "cod": "10", "valor": 9, "valorT": 18, "descricao": "Over Salada: Pão, hamburguer, queijo, salada e maionese.", "grupo": "Over Burguer", "tipo": "Tradicionais 100g", "qt": 0, "qtTrio": 0   },
        { "cod": "11", "valor": 13, "valorT": 26, "descricao": "Over Bacon: Pão, hamburguer, queijo, bacon, salada e maionese.", "grupo": "Over Burguer", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "12", "valor": 17, "valorT": 34, "descricao": "Over Burguer: Pão, hamburguer, queijo, presunto, ovo, bacon, salada e maionese.", "grupo": "Over Burguer", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "13", "valor": 18, "valorT": 32, "descricao": "OVER KART - PÃO TRADICIONAL GERGELIM, HAMBURGUER 150g, TOMATE, CEBOLA CARAMELIZADA, CHEDDAR, BACON, MAIONESE ESPECIAL.", "grupo": "ARTESANAIS", "tipo": "HAMBURGUERES", "qt": 0, "qtTrio": 0   },
        { "cod": "14", "valor": 17, "valorT": 34, "descricao": "OVER RUN - PÃO TRADICIONAL GERGELIM, HAMBURGUER 150g, TOMATE, CEBOLA ROXA, CHEDDAR, BACON, MAIONESE ESPECIAL.", "grupo": "ARTESANAIS", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "15", "valor": 16, "valorT": 32, "descricao": "OVER BIKE - PÃO TRADICIONAL GERGELIM, HAMBURGUER 150g, TOMATE, MUSSARELA, BACON, MAIONESE ESPECIAL.", "grupo": "ARTESANAIS", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "16", "valor": 10, "valorT": 20, "descricao": "Pão, Salsicha Perdigão, queijo, molho, milho, MAIONESE ESPECIAL e batata palha.", "grupo": "Salsicha ao Molho", "tipo": "Artesanal", "qt": 0, "qtTrio": 0   },
        { "cod": "17", "valor": 12, "valorT": 24, "descricao": "Pão, 2 Salsicha Perdigão, queijo, molho, milho, MAIONESE ESPECIAL e batata palha.", "grupo": "Salsicha ao Molho", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "18", "valor": 13, "valorT": 26, "descricao": "Especial c/bacon - Pão, Salsicha Perdigão, queijo, molho, milho, MAIONESE ESPECIAL e batata palha.", "grupo": "Salsicha ao Molho", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "19", "valor": 12, "valorT": 24, "descricao": "Espcial c/pasta de alho - Pão, Salsicha Perdigão, queijo, molho, milho e batata palha.", "grupo": "Salsicha ao Molho", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "20", "valor": 11, "valorT": 22, "descricao": "Pão, Strogonoff de frango, queijo, milho e batata palha.", "grupo": "Strogonoff de Frango", "tipo": "Artesanal", "qt": 0, "qtTrio": 0   },
        { "cod": "21", "valor": 12, "valorT": 24, "descricao": "Pão, Strogonoff de frango, queijo, catupiry, milho e batata palha.", "grupo": "Strogonoff de Frango", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "22", "valor": 30, "valorT": 60, "descricao": "Pão, Strogonoff de frango, queijo, salsicha Perdigão, milho e batata palha.", "grupo": "Strogonoff de Frango", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "23", "valor": 14, "valorT": 29, "descricao": "Pão, Strogonoff de frango, queijo, salsicha Perdigão, catupiry, milho e batata palha.", "grupo": "Strogonoff de Frango", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "24", "valor": 14, "valorT": 29, "descricao": "Especial c/ bacon - Pão, Strogonoff de frango, queijo, milho e batata palha.", "grupo": "Strogonoff de Frango", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "25", "valor": 12.5, "valorT": 23, "descricao": "Especial c/ pasta de alho - Pão, Strogonoff de frango, queijo, milho e batata palha.", "grupo": "Strogonoff de Frango", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "26", "valor": 14, "valorT": 28, "descricao": "TEXANO - Pão, linguicinha defumada, mussarela, molho de tomate caseiro, maionese, bacon e batata palha.", "grupo": "Linguicinha Defumada", "tipo": "Perdigão", "qt": 0, "qtTrio": 0   },
        { "cod": "27", "valor": 15, "valorT": 30, "descricao": "COWBOY - Pão, linguicinha defumada, mussarela, strogonoff de frango, bacon e batata palha.", "grupo": "Linguicinha Defumada", "tipo": "", "qt": 0, "qtTrio": 0   },
        { "cod": "", "valor": 10, "descricao": "COMBO(Batata Frita + Refri)", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 2, "descricao": "Batata Palha", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 3, "descricao": "Calabresa", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 1, "descricao": "Catupiry", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 2, "descricao": "Salsicha", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 3, "descricao": "Bacon", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 4, "descricao": "Filé", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 2, "descricao": "Ovo", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 4, "descricao": "Hamburguer", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 1, "descricao": "Embalagem p/ Viagem", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 1.5, "descricao": "Pasta Artesanal VERDE", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 1.5, "descricao": "Pasta Artesanal ALHO", "grupo": "ADICIONAIS", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 4.5, "descricao": "Refrigerante em lata", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 6, "descricao": "Refrigerante 600ml", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 8, "descricao": "Refrigerante 1,5 litros", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 10, "descricao": "Refrigerante 2 litros", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 6, "descricao": "Limoneto / H2O", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 5, "descricao": "Chá - limão / pêssego", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 5, "descricao": "Suco em lata", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 2.5, "descricao": "Suco de caixinha 200 ml", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 8, "descricao": "Cerveja long neck", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 10, "descricao": "Red Bull", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 2.5, "descricao": "Água mineral", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 3, "descricao": "Transformar 1 suco em creme", "grupo": "Bebidas", "tipo": "", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Abacaxi", "grupo": "Sucos (Tradicionais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Acerola", "grupo": "Sucos (Tradicionais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Caju", "grupo": "Sucos (Tradicionais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Goiaba", "grupo": "Sucos (Tradicionais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 4.9, "descricao": "Manga", "grupo": "Sucos (Tradicionais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Morango", "grupo": "Sucos (Especiais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Maracujá", "grupo": "Sucos (Especiais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Cupuaçu", "grupo": "Sucos (Especiais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Abacaxi com Hortelá", "grupo": "Sucos (Especiais)", "tipo": "POLPAS", "qt": 0 },
        { "cod": "", "valor": 6.9, "descricao": "Cajá", "grupo": "Sucos (Especiais)", "tipo": "POLPAS", "qt": 0 }]
}