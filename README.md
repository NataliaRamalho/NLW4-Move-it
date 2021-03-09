# Move-it 
Projeto desenvolvido durante a semana Next Level 4 proporcionada pela Rocketseat. Nesta aplicação o usuário inicia um ciclo de tempo 
que quando finalizado sorteia um desafio para ser realizado, depois de completar o desafio o usuário ganha experiência e pode começar um novo ciclo.
<p> Para acessar a aplicação <a href="https://move-it4-7op0fabyf-nat4.vercel.app/">clique aqui</a> </p>


:mag_right:Sumário
=================
<!--ts-->
   * [Funcionalidades principais](#Funcionalidades-principais )
   * [Tecnologias utilizadas](#tecnologias-utilizadas)
   * [Telas da aplicação](#Telas-da-aplicação)
   * [Como executar o código](#como-executar-o-código)
<!--te-->

 # Funcionalidades principais 
<li> Cadastro e login </li>
<li> Sorteio de desafios </li>
<li> Contagem de pontos, níveis e desafios concluídos </li>

# Tecnologias utilizadas 
<li> React </li>
<li> Next.js </li>
<li> TypeScript </li>
<li> MongoDB </li>
<li> Axios </li>
<li> Cookie.js </li>

# Telas da aplicação
<li> Tela de login 🔐 </li>
</br>
<img src= "https://github.com/NataliaRamalho/NLW4/blob/main/telas/telaLogin.png"/>
Nesta tela pode-se realizar o login ou cadastro na aplicação. 
</br></br>
<li> Home 🏠</li>
</br>
<img src= "https://github.com/NataliaRamalho/NLW4/blob/main/telas/Home.png"/>
<img src= "https://github.com/NataliaRamalho/NLW4/blob/main/telas/Home1.png"/>
<img src= "https://github.com/NataliaRamalho/NLW4/blob/main/telas/Home3.png"/>
<p> Esta é a tela principal da aplicação, na qual o usuário tem acesso ao cronometro, o qual marcará o tempo de um ciclo,
que quando for finalizado irá sortear um desafio para ser realizado e avisará o usuário sobre o novo desafio.
Na home, há também a possibilidade de abandonar o ciclo após o tempo ser iniciado; também pode-se modificar o tempo de cada ciclo,
para isto basta apertar no botão +5- e além disso, é pode-se verificar o nível, experiência e desafios completados.</p>

# Como executar o código
<strong>  Pré-requisitos 📌 </strong>
<li> <a href="https://nodejs.org/en/" >Node.js </a>  </li>
<li> Editor de codigo. Recomenda-se o <a href="https://code.visualstudio.com/" >VSCode </a> </li>
<li> Pacote npm ou yarn. O pacote npm vem junto com o <a href="https://nodejs.org/en/" >Node.js </a> </li>
<li> Conta no <a href="https://www.mongodb.com/" >mongoDb </a>  </li>

</br>
<strong> ⚙️ Executando ... </strong>
</br>
</br>
<li> Baixe este repositório </li>
Caso tenho o <a href="https://git-scm.com/downloads" >git </a> instalado, digite o comando abaixo no seu terminal. 
Caso não tenha faça o download do repositório e descompacte o arquivo.

`````
git clone https://github.com/NataliaRamalho/NLW4-Move-it.git 
`````

<li> Instale as dependências </li>
Abra o projeto no editor de código e no terminal estando dentro da pasta do projeto, digite:

`````
npm install
`````
<li> Configurando o arquivo _env </li>
<p>No <a href="https://www.mongodb.com/" >mongoDb </a> realize o login na sua conta, em seguida va na aba <strong>Database Access</strong> e configure um usuario.</br>
Depois va na aba Clusters e clique em connect -> connect your application e copiei a url.</br>
Posteriormente abra o arquivo _env e cole a url, em seguida modifique substitua os parâmetros da url(username, password, nomedobanco)
de acordo com o usuário que foi configurado anteriormente anteriormente.</br>
Por fim, mude o nome do arquivo _env para .env.</p>

<li> Rodando a aplicação </li>
No terminal estando dentro da aplicação digite:

`````
npm dev
`````

Parabéns o código está executando 😃, agora basta abrir uma janela do seu navegador e entrar na url: http://localhost:3000.


