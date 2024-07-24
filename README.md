 # SISTEMA DE RECLAMAÇÔES

## 1. Introdução

O sistema vai permitir que um cliente (mesmo desconhecido) possa apresentar uma reclamação sobre um produto ou serviço.

O cliente entra numa página web e preenche um formário com os seguintes campos: 

    -Email * (obrigatório)
    -Nome * (facultativo)
    -Selecionar a área de reclamação * (obrigatório) - select de html com opções
    -Áre de texto para a reclamação * (obrigatório)
    -Upload de ficheiros (max 3) (facultativo)
    -Enviar Botão.

## back-end

- O back-end deve receber os dados do formulário e guardar numa base  de dados
- Ao submeter o formulário, vai ser enviado um email para o cliente, cotendo a sua reclamação e um número de referência e um link com um purl (Personal url) para queo cliente possa consultar o estado da sua reclamação.

Paralelamente, o sistema vai ter um conjunto de usuários com diferentes perfis:

-Administrador - pode consultar todas as reclamações e alterar o estado de cada uma e tem a possibilidade de responder ao cliente e fazer a gestão da plataforma.

    -gestão de utilizadores
    -eliminar reclamaçoes
    -atribuir reclamações a outros utilizadores
    -etc-

# Fluxo

-O Cliente submete a reclamação

    -se o email não existir na base de dados é criado um novo registro de cliente.
    -vai permitir ter dados de clientes desconhecidos.
    -vai permitir fazer o rastreio de reclamações por cliente.

# Base de dados
-Users
    -id (PK)
    - email / username (varchar 100)
    - password (varchar 200)
    - role (varchar 50)
    - created_at (dateTime)
    - updated_at (dateTime) / NULL
    - deleted_at (dateTime) / NULL

- Clients
    - id (PK)
    - email (varchar 100)
    - nome (varchar 100) NULL
    - created_at (dateTime)


- Complaints:
   - id
   - client_id
   - created_at (dateTime)
   - updated_at (dateTime)


- Complaints_status
    - id (PK)
    - complaint_id (FK)
    - context               - quem faz a alteração do estado (cliente ou user)
    - status (varchar 50)
    - created_at (dateTime)


-Complaints_Messages
    - id (PK)
    - complaint_id (FK)
    - user_id (FK)
    - client_id (FK)
    - area
    - message (text)
    - attachments (varchar 50) / NULL    (anexos)
    - created_at (dateTime)
    - updated_at (dateTime) / NULL
    - deleted_at (dateTime) / NULL

# Atenção

- a reclamação, após ser submetida, não vai poder ser editada.

- as respostas dos colaboradores vão poder ser editadas até que a reclamação seja fechada.

- são os colaboradores que têm a responsabilidade de fechar as reclamações e de ir alterando o estado das mesmas.

-sempre que acontecer uma alteração no estado da reclamaçãp, o clinte vai receber um email com actualização. Nesse email, vai um purl (personal url) para que o cliente possa consultar o estado da sua reclamação.

-ao visualizar a reclamação, as respostas subsequeentes, o cliente vai poder ver o estado da reclamação e  as respostas dos colaboradores. Vai poder ver o processo em modo de forum.
