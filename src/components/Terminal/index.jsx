import TerminalStyle from "./terminal";

const Terminal = () => {
  return (
    <TerminalStyle>
      <div>
        <div className="terminal">
          <div id="bar">
            <div id="red"></div>
            <div id="yellow"></div>
            <div id="green"></div>
          </div>
          <div id="screen">
            <p class="font">
              <span>francisco</span>@10.0.0.1:~$ <span>ls</span>
            </p>
            <p class="font">readme.md index.html</p>
            <p class="font">
              <span>francisco</span>@10.0.0.1:~$ <span>cat</span> readme.md
            </p>
            <p class="font">
              Bem vindo ao meu portifolio, espero que goste do que encontrar.{" "}
            </p>
          </div>
        </div>
      </div>
    </TerminalStyle>
  );
};

export default Terminal;
