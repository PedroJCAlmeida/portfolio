import ImgQuizz from "./assets/projects/quizz.png"
import ImgJogoDoGalo from "./assets/projects/jogo-do-galo.png"
import ImgSimpleShop from "./assets/projects/shop.png" 
import ImgTaskManage from "./assets/projects/task-manage.png" 
import ImgPlacePicker from "./assets/projects/placepicker.png" 
import ImgParoquiaPerto from "./assets/projects/paroquia-perto.png"


const projects = [
  {
    id: 1,
    title: "Quizz",
    description: "⏳ Quizz Interativo em React - Teste seus conhecimentos com este quizz dinâmico e cronometrado! Responda dentro do tempo, veja se acertou e desafie-se a melhorar!",
    techs: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    link: "https://pedrojcalmeida.github.io/portfolio-quizz/",
    image: ImgQuizz,
  },
  {
    id: 2,
    title: "Jogo do Galo",
    description: "🎮 Jogo do Galo (Tic-Tac-Toe) interactivo feito com React! Escolha nomes para os jogadores, registe as jogadas e reinicie a qualquer momento.",
    techs: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    link: "https://pedrojcalmeida.github.io/portfolio-jogo-do-galo/",
    image: ImgJogoDoGalo,
  },
  {
    id: 3,
    title: "E-commerce",
    description: "🛒 E-commerce simples feito com React, permitindo adicionar e remover produtos do carrinho em tempo real com Context API.",
    techs: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/PedroJCAlmeida/protfolio-simple-shop",
    image: ImgSimpleShop,
  },
  {
    id: 4,
    title: "Gerenciador de Tarefas",
    description: "🛠️ Aplicação de gerenciamento de projectos e tarefas feita com React e estilizada com Tailwind CSS. Crie, edite e exclua projectos e tarefas de maneira simples e intuitiva.",
    techs: ["React","Vite", "Tailwind", "JavaScript", "HTML",],
    link: "https://github.com/PedroJCAlmeida/toDoListReact",
    image: ImgTaskManage,
  },
 {
    id: 6,
    title: "PlacePicker",
    description: "Aplicativo web em React para criar listas de lugares favoritos com ordenação por proximidade.",
    techs: ["Node.js", "React", "Vite", "CSS", "JavaScrit"],
    link: "https://github.com/PedroJCAlmeida/portfolio-place-picker",
    image: ImgPlacePicker,
  },
  {
  id: 7,
  title: "Paróquia Perto",
  description: "⛪ Plataforma web para localizar paróquias próximas, ver horários de missa, eventos e comunicados. Desenvolvido em colaboração com Renato Alves.",
  techs: ["React", "Spring Boot", "PostgreSQL", "CSS", "HTML"],
  link: "https://paroquiaperto.com", 
  image: ImgParoquiaPerto,
},
];

export default projects;
