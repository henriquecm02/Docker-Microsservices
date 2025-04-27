
# Docker: Utilização Prática no Cenário de Microsserviços

Este projeto demonstra a implementação de uma arquitetura de microsserviços usando Docker e Docker Compose. O sistema contém dois serviços:

1. **API**: Um microsserviço simples em Node.js.
2. **NGINX**: Usado como proxy reverso para rotear as requisições para a API.

## Como executar

#### 1. Clone este repositório:

   ```bash
   git clone https://github.com/seunome/docker-microservices.git
   cd docker-microservices
```
#### 2. Crie os containers e inicie os serviços:
   
 ```bash
  docker-compose up --build
   ```

#### 3. Acesse a aplicação:

A aplicação estará disponível no http://localhost e você verá a mensagem "Microserviço está funcionando!".



#### Estrutura do Projeto

  ```bash
  api/: Contém o microsserviço em Node.js.

  nginx/: Contém a configuração do NGINX.

  docker-compose.yml: Orquestração dos containers.

  ```
## Contribuições

Sinta-se à vontade para fazer um fork deste repositório, melhorar o código e enviar pull requests.


