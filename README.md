# API- TRATAMENTO DE PALAVRAS

API básica para validar se uma sequencia de palavras são validas, para utilizar basta enviar uma array de palavras em português e a API retornará as palavras válidas de acordo com os critérios definidos.

-  Ex: ["muito","banana", "john"] ~ Nesse exemplo, ele irá retirar a palavra "John"

## FERRAMENTAS UTILIZADAS:
- NodeJs
- Express
- Cheerio
- Jest

## ENDPOINTS:
- /palavras
Método POST, enviar no body um array de palavras, como no exemplo.

## FEATURES
- [x] Filtram palavras que existem de acordo com o Dicio;
- [x] Filtram palavras derivadas como viram, estiveram e perderam;
- [ ] Remover Palavrões;
- [ ] Opção de escolha de quais filtros utilizar.
