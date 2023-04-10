export interface IMensagem {
  mensagemId: string;
  mensagemTitle: string;
  mensagemContent: string;
  mensagemAuthor: string;
  sendDate: Date;
  isRead: boolean;
}

export const Dados = [
  {
    grupoId: "1",
    grupoName: "Nome do Grupo",
    grupoAuthor: "Erick",
    createdDate: new Date(),
    members: [
      {
        idMember: "5",
        nameMember: "Teste",
      },
    ],
    mensagens: [
      {
        mensagemId: "2",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: false,
      },
      {
        mensagemId: "3",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: false,
      },
      {
        mensagemId: "4",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: true,
      },
      {
        mensagemId: "5",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: true,
      },
    ],
  },
  {
    grupoId: "54",
    grupoName: "Nome do Grupo",
    grupoAuthor: "Erick",
    createdDate: new Date(),
    members: [
      {
        idMember: "54562458555",
        nameMember: "Teste",
      },
    ],
    mensagens: [
      {
        mensagemId: "45456",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: true,
      },
      {
        mensagemId: "65454",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: false,
      },
      {
        mensagemId: "548742",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu conteudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: false,
      },
      {
        mensagemId: "56656",
        mensagemTitle: "Titulo da Mensagem",
        mensagemContent: "Meu contdasdasfudo",
        mensagemAuthor: "Erick",
        sendDate: new Date(),
        isRead: true,
      },
    ],
  },
];
