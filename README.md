# **Hotel Management System**

Este é um sistema de gerenciamento de hotel desenvolvido em **Laravel 11**, utilizando **PHP 8.3**, **PostgreSQL**, **InertiaJS com ReactJS** e autenticação **JWT**.

## **Pré-requisitos**

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## **Instalação**

Siga os passos abaixo para configurar o projeto:

### **Instalando o projeto**

   ```bash
git clone https://seu-repositorio-url.git
cd nome-do-repositorio
   
2. Copie o arquivo de exemplo de configuração:
cp .env.example .env

3. Configure o arquivo .env:
Abra o arquivo .env e altere as configurações do banco de dados e
 outras variáveis conforme necessário.

4. Inicie os containers:
docker-compose up -d

5. Acesse o container da aplicação:
Para executar comandos no Laravel dentro do container, use:
docker exec -it laravel_app bash

6. Gere a chave da aplicação:
Dentro do container, execute:
php artisan key:generate

7. Execute as migrações do banco de dados:
Ainda dentro do container, rode:
php artisan migrate

8. Acesse a aplicação:
Abra o navegador e vá para http://localhost:8000.

Estrutura do Projeto
app/: Contém a lógica do aplicativo.
database/: Contém as migrações e seeders do banco de dados.
resources/: Contém as views e assets do frontend.
routes/: Contém as definições de rotas.

Contribuição
Se você deseja contribuir para este projeto, sinta-se à vontade para abrir um Pull Request.

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais informações.
