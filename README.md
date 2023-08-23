# BRQMovies - Test for BRQ TEAM

**BRQMovies** project repository developed using React Native CLI, Styled-Components, TypeScript, Navigation, Forms Validation with Formik, Unit Tests, Axios.

### 🎯 About the project

<details>
<summary>Summary</summary>
◽ <a href="#inicio">Architecture</a> <br>
◽ <a href="#lib">Libraries</a> <br>
◽ <a href="#instalacao">Clonar Projeto</a> <br>
</details>

<h2 id="inicio">Project Architecture</h2>

<h3>Container Architecture</h3>
<ul>
   <li>This architecture consists of the separation between logic (index.ts), view (view.tsx), styling (styles.ts) and typing (types.ts).</li>
   <li>Similar to MVVM, it makes each file accountable.</li>
   <li>Pros: Improved code maintenance, reusable typings, better organization, separation of responsibilities, easy understanding, forces the project to have well-established typings, code repurposing.</li>
    <li>Cons: Big flow of typing for components, need to type 1 prop in multiple files, not well suited to using forwardRef, higher verbosity due to level of separation of responsibility.</li>
</ul>

<h2 id="lib">Libraries used</h2>

<h3>Libraries</h3>
<ul>
   <li>Formik: Formik simplifies form management in React as well as React Hook Form.</li>
   <li>Yup: Validation/Creation of schemas for form field rules.</li>
   <li>Axios: Using Axios for REST API consumption.</li>
   <li>React-Native-Reanimated: Creation of app animations for better user experience.</li>
   <li>React-Navigation: Creation of routes for the App, Stack, Material Top Tap Navigatior and other actions, such as StackActions, and other route handling.</li>
   <li>@react-navigation/material-top-tabs: Creation of navigation in Application Top Tabs.</li>
   <li>react-native-toast-message: Creation of warning toasts for the user, whether they are for errors or success.</li>
   <li>styled-components: Creation of the Thema, and stylization of the project, being a great tool together with Reanimated for creating custom screens without major limitations.</li>
   <li>react-native-splash-screen: Creating the Splash Screen of the App.</li>
   <li>eslint/prettier: Creation of the project's formatting/code pattern.</li>
   <li>react-native-svg/react-native-svg-transformer: Using imports and using SVG`s within the project.</li>
   <li>jest: Creation of unit tests for project integrity.</li>
</ul>

<h3 id="instalacao">📁 Cloning Initialization</h3>

◽ Clone the repository using Git Bash + the command:

       $ git clone git@github.com:IMatheusPiresI/brq-movie.git

◽ Access the project folder and run the command <br>

        $ yarn

◽ Android:  <br>

        $ yarn android

◽ IOS:  <br>

        $ yarn pod (This already configured command will do `cd ios && pod install`)

        $ yarn ios

<h3 id="autor">✒️ Autor</h3>

<a href="https://github.com/imatheuspiresi"> <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/84977444?v=4" width="100px;" alt="Personal photo"/> </a>

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-pires-87a174211/) [![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/imatheuspiresi) [![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:matheuspdsousa@gmail.com)
