# API - TRATAMENTO DE PALAVRAS

API básica para validar se uma sequencia de palavras são validas, para utilizar basta enviar uma array de palavras em português e a API retornará as palavras válidas de acordo com os critérios definidos.

![image](https://user-images.githubusercontent.com/65171479/163722745-d883600f-301f-439f-a93b-09ce0af58ca8.png)

## FERRAMENTAS UTILIZADAS:
- NodeJs
- Express
- Cheerio
- Jest

## [DOCUMENTAÇÃO](https://tratamento-de-palavras-api.vercel.app/):
`/verificar` <br>
Nesse endpoint pode-se enviar os filtros, todos opcionais, e as palavras que serão validadas. <br>
  >"filters": {
   > "onlyValidWords": true,
   > "onlySingular": true,
   > "random": true,
   > "removeBadWords": true
  >},
  >"words":[
		"beleza",
		"frutas"
]}
 
Caso não seja enviado nenhum filtro, o padrão é filtrar somente as palavras que existem de acordo com o [DICIO](https://www.dicio.com.br/)


## FEATURES
- [x] Filtram palavras que existem de acordo com o Dicio;
- [x] Filtram palavras no plural como viram, estiveram,bananas e perderam;
- [x] Remover Palavrões;
- [x] Opção de escolha de quais filtros utilizar.

Palavras válidas disponíveis em: < https://www.dicio.com.br >.
