# Schedules 🗓️
### Objetivo da aplicação:
Criar Agendamentos dos laboratórios da instituição.
na aplicação deve ser possível agendar horário para os laboratório da instituição, tal agendamento deve ser validado por um responsável pelo laboratório, sempre que houver um agendamento um email deve ser enviado para o responsável, para que possa validar o agendamento, assim que validado o agendamento aparece para quem o realizou,
a aplicação deve controlar os horários dos laboratório, não sendo possível realizar agendamento para mesmo local e horário.

## Telas da aplicação 📄
### Login
Ao acessar o endereço da aplicação o usuário cairá na tela de login, onde deve se autenticar com login através do google, a aplicação deve aceitar apenas usuários com email's corporativos do Cetem.
### Meus Agendamentos / Todos Agendamentos
Ao se autenticar na aplicação usuário é direcionado para tela Meus agendamentos , onde é capaz de ver uma lista com todos seus horários agendados, os agendamentos são listados por data e hora, sendo possível filtrar por status do agendamento, por padrão será listados os itens pendentes e Agendados.
Usuários normais vem apenas seus agendamentos
Usuário Responsável por local ve todos os agendamentos do local
admin vê todos os locais nos agendamentos .
Os itens Listados no menu são:
Local, Data, Horário, Status. 
###  Novo Agendamento 
Nessa tela é possível agendar horário nos laboratório.
os campos disponíveis são 
data e Hora, Local, Descrição, Materiais, Quantidade. 
O sistema deve validar se na data e hora escolhida os laboratórios estão disponíveis, sendo permitido selecionar apenas aqueles que não estão agendados.

## Rotas Da Aplicação ⤴️
### Rota meus agendamentos
Rota do tipo GET que retorna os agendamentos validos por usuário, retorna somente os agendamento criados pelo usuário logado, até a data em questão que tem status agendado ou pendente.
### Rota todos agendamentos
Rota do tipo GET que retorna todos agendamentos validos por local, retorna somente os agendamento para os locais onde o usuário logado é responsável, até a data em questão que tem status agendado, pendente ou indeferido.
### Agendamento admin
Rota do tipo GET que retorna todos agendamentos, sendo possível filtrar por status usuário ou local

### Toggle Status
Rota do Tipo Patch altera status do agendamento.
apenas usuários do tipo admin ou responsável podem alterar status.   

### Criação de Agendamentos
Rota do tipo Post, deve ser possível criar agendamentos para os locais, os Agendamentos devem conter Data e hora de inicio e fim, Local, Descrição, Materiais,Quantidade, 

### Criação de Usuário
Rota do tipo Post, dever ser possível criar usuários através de autenticação pelo Google,
o usuário deve ter id, token_id, nome , email, picture, role(user, responsible, admin).

## Modelagem do Banco
### users
Tabela com todos os campos dos usuário de deve conter os campos:[
    id, 
    token_id, 
    name, 
    email, 
    picture, 
    role, 
]

### locals
Tabela com todos os locais para agendamentos deve conter os campos:[
    id, 
    name, 
    type,
    description,
    isIndisponible, 
    openHour,
    closeHour,
    agendamentos, 
    responsáveis,
]

### Schedules
Tabela que guada os agendamentos:[
    id,
    startHour,
    endHour,
    local,
    description,
    material,
    quantity,
    status,
    author,
]




