# BRQMovies - Test for BRQ TEAM

**BRQMovies** project repository developed using React Native CLI, Styled-Components, TypeScript, Navigation, Forms Validation with Formik, Unit Tests, Axios.

### 🎯 About the project

<details>
<summary>Summary</summary>
◽ <a href="#inicio">Architecture</a> <br>
◽ <a href="#lib">Bibliotecas</a> <br>
◽ <a href="#instalacao">Clonar Projeto</a> <br>
</details>

<h2 id="inicio">Project Architecture</h2>

<h3>Arquitetura de Container</h3>
<ul>
   <li>Essa arquitetura consiste na separação entre lógica, visualização, estilização e tipagem.</li>
   <li>Similar ao MVVM, faz com que cada arquivo tenha sua responsabilidade.</li>
   <li>Prós: Melhora na manutenção do código, reaproveitamento de tipagens, melhor organização, separação de responsabilidade, fácil entendimento, força o projeto a ter tipagens bem estabelecidas, reaproveitamento de código.</li>
    <li>Contras: Fluxo grande de tipagem para components, sende necessário tipa 1 prop em múltiplos arquivos, não tão adequada ao uso de fowardRef, maior verbosidade devido o nível de separação de responsabilidade.</li>
</ul>

<h2 id="lib">Bibliotecas utilizadas</h2>

<h3>Bibliotecas</h3>
<ul>
   <li>Formik: O Formik simplifica a gestão de formulários no React assim como o React Hook Form.</li>
   <li>Yup: Validação/Criação de schemas para regras dos campos dos formulários.</li>
   <li>Axios: Utilização do Axios para consumo de API REST.</li>
   <li>React-Native-Reanimated: Criação das animações do aplicativo para melhor experiência do usuário.</li>
   <li>React-Navigation: Criação das rotas do App, Stack, Material Top Tap Navigatior e demais actions, como StackActions, e demais tratativas de rotas.</li>
   <li>@react-navigation/material-top-tabs: Criação da navegação em Top Tabs do Aplicativo.</li>
   <li>react-native-toast-message: Criação dos toasts de aviso para o usuário, sejam eles de erros ou sucesso.</li>
   <li>styled-components: Criação do Thema, e estilização do projeto, sendo uma ótima ferramenta em conjunto com Reanimated para criação de telas customizadas sem grandes limitações.</li>
   <li>react-native-splash-screen: Criação da Splash Screen do App.</li>
   <li>eslint/prettier: Criação do padrão de formatação/código do projeto.</li>
   <li>react-native-svg/react-native-svg-transformer: Utilização das importações e uso de SVG`s dentro do projeto.</li>
   <li>jest: Criação dos testes unitários para integridade do projeto.</li>
</ul>

<h3 id="instalacao">📁 Inicialização da Clonagem</h3>

◽ <a href="">Acessar</a>🔗 o código fonte pelo GitHub. <br>
◽ Clonar o repositório ultilizando Git Bash + o comando:

       $ git clone git@github.com:IMatheusPiresI/brq-movie.git

◽ Acessar a pasta to-ducks-tasks e executar o comando <br>

        $ yarn

◽ Android:  <br>

        $ yarn android

◽ IOS:  <br>

        $ yarn pod (Esse comando já configurado fará `cd ios && pod install`)

        $ yarn ios

<h3 id="autor">✒️ Autor</h3>

<a href="https://github.com/imatheuspiresi"> <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/84977444?v=4" width="100px;" alt="Personal photo"/> </a>

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-pires-87a174211/) [![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/imatheuspiresi) [![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:matheuspdsousa@gmail.com)
