import React from 'react';
import './Content.css';

function Content(){
  return(
    <>
      <section>
        <h2>O que é um Trigger?</h2>
        <p>Um trigger (ou gatilho) é um sistema importante para garantir a automação, integridade e monitoramento no banco de dados. É uma forma de automatizar tarefas no banco de dados, sem precisar de intervenção manual ou lógica extra no código da aplicação.</p>
        
        <h3>Para que ele serve?</h3>
        <p>Os triggers são usados para:</p>
        <p>1- Automatizar processos: Executar tarefas de forma automática, como fazer vistorias, atualizar registros em outras tabelas ou realizar cálculos.</p>
        <p>2- Garantir integridade de dados: Garantir que regras sejam seguidas, como evitar dados errados ou fazer ajustes automáticos, como executar ações automaticamente quando algo é inserido, alterado ou excluído.</p>
        <p>3- Auditar e monitorar: Registrar eventos importantes no banco de dados, como inclusões e alterações, para rastrear mudanças.</p>
        <p>4- Sincronização: Manter dados constantes entre diferentes tabelas ou bancos de dados sem precisar de processamento manual.
         </p>

        <h4>Como ele é usado?</h4>
        <p>Um trigger é configurado no banco de dados para executar uma ação quando um evento específico acontece, como a inserção de uma linha em uma tabela, e pode por exemplo, registrar essa ação em uma tabela de auditoria.</p>

        <h5>Quem usa?</h5>
        <p>Triggers são usados principalmente por:</p>
        <p>1- Administradores de Banco de Dados: Profissionais responsáveis pela gestão de bancos de dados, que configuram triggers para garantir o funcionamento adequado e a integridade dos dados.</p>
        <p>2- Desenvolvedores de Software: Criam triggers para automatizar tarefas e garantir que regras sejam aplicadas diretamente no banco de dados.</p>
        <p>3- Equipes de TI e Suporte: Usam triggers para o monitoramento de atividades no banco de dados, como forma de rastrear quem alterou o quê e quando.</p>
        <p>4- Empresas de todos os portes: Em sistemas que exigem controle rigoroso de dados, como bancos, sistemas de saúde e financeiros, ajudando a garantir o bom funcionamento do banco e o cumprimento das normas internas.</p>

      </section>
    </>
  );
};
export default Content;