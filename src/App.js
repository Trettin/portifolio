import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <img
        class="foto"
        src="https://i.imgur.com/cV2yCmQ.png"
        alt="Foto de Gabriel Trettin"
      />

      <div class="dados">
        <h1>Gabriel Trettin <span>, 30</span></h1>
        <p id="ptit" class="profissao t60">
          Desenvolvedor full-stack em formação
        </p>
      </div>
    </header>

    <main>
      <div class="coluna_menor">
        <div class="experiencias">
          <h2>
            Experiências Profissionais
          </h2>
          <div class="linha"></div>
          <ul>
            <li>
              <img src="https://i.imgur.com/afxcto3.jpg" alt="" />
              <div class="conteudo">
                <h3>CEO - Fundador <span class="span">@Plenus</span></h3>
                <p class="periodo t60">2019 - Atual</p>
              </div>
            </li>

            <li>
              <img src="https://i.imgur.com/OzLCX27.png" alt="" />
              <div class="conteudo">
                <h3>
                  Psicólogo<span class="span"> @Humanize Espaço Integral</span>
                </h3>
                <p class="periodo t60">2018 - 2020</p>
              </div>
            </li>

            <li>
              <img src="https://i.imgur.com/VbW4e1K.jpg" alt="" />
              <div class="conteudo">
                <h3>Psicólogo<span class="span"> @Dirigindo Bem</span></h3>
                <p class="periodo t60">2017 - 2018</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="formacao">
          <h2>
            Formação
          </h2>
          <div class="linha"></div>
          <ul>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-vj2u_MGlubesveMHUxr9pubkZFEyRvbDg&usqp=CAU"
                alt=""
              />
              <div class="conteudo">
                <h3>
                  Especialização - Psicologia Integral
                  <span class="span">@ISEO</span>
                </h3>
                <p class="periodo t60">2018 - 2019</p>
              </div>
            </li>

            <li>
              <img
                src="https://media.glassdoor.com/sqll/2489133/unime-squarelogo-1552286560833.png"
                alt=""
              />
              <div class="conteudo">
                <h3>Psicologia <span class="span">@Unime</span></h3>
                <p class="periodo t60">2012 - 2016</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="coluna_maior">
        <h2>Habilidades</h2>
        <div class="habilidades">
          <div class="habilidade">
            <h3>Front</h3>
            <ul>
              <li>
                <p class="nome">HTML</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">CSS</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">Java Script</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">React</p>
                <div class="progresso">
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>
            </ul>
          </div>

          <div class="habilidade">
            <h3>Back</h3>
            <ul>
              <li>
                <p class="nome">Node.js</p>
                <div class="progresso">
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">PHP</p>
                <div class="progresso">
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">mySQL</p>
                <div class="progresso">
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">PostgresSQL</p>
                <div class="progresso">
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>
            </ul>
          </div>

          <div class="habilidade">
            <h3>Soft skills</h3>
            <ul>
              <li>
                <p class="nome">Comunicação</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">Trabalho em equipe</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra incompleto"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">Gerencimamento de tempo</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra incompleto"></div>
                </div>
              </li>

              <li>
                <p class="nome">Gestão de conflitos</p>
                <div class="progresso">
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                  <div class="barra"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h2 class="tituloprojetos">Projetos</h2>
        <div class="projetos">
          <div class="projeto">
            <h3>Casa Criativa</h3>
            <p>
              Casa criativa é um site para se catalogar ideias com intuito de
              tornar o período de isolamento social, devido ao Covid19, mais
              interessante. <br />
              Projeto desenvolvio no WorkshopDev Especial da Rocketseat.
            </p>
            <img
              src="https://i.imgur.com/bUt3lLe.jpg"
              alt="imagem casa criativa"
            />
            <a href="https://criativacasa.netlify.app/" target="_blank" rel='noreferrer'
              >Ver projeto</a
            >
          </div>

          <div class="projeto">
            <h3>Anna Bella</h3>
            <p>
              Site fictício p/ modeleo fictícia Anna Bella produzido durante o
              curso Desenvolvimento Web Cmpleto 2020
            </p>
            <img
              src="https://imgur.com/QkKhvrv.jpg"
              alt="imagem capa annabella"
            />
            <a href="https://bellaanna.netlify.app" target="_blank" rel='noreferrer'
              >Ver projeto</a
            >
          </div>
        </div>
      </div>
    </main>

    <footer>
      Projeto desenvolvido durante a imersão da Cubos Academy 2020
    </footer>
    </div>
  );
}

export default App;
