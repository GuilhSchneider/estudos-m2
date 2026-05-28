const parte = localStorage.getItem('parteSelecionada')

const conteudos = {

1: `

<h1>🐳 Parte 1 — Docker, Virtualização e Cloud Computing</h1>

<div class="card">

<h2>📚 Introdução</h2>

<p>
A virtualização revolucionou a infraestrutura moderna permitindo que múltiplos sistemas operacionais fossem executados no mesmo hardware físico.
</p>

<p>
Com o avanço da computação em nuvem e da necessidade de escalabilidade, novas tecnologias como containers e Docker surgiram oferecendo ambientes mais leves, rápidos e eficientes.
</p>

<p>
Hoje, praticamente toda grande empresa utiliza virtualização, containers ou cloud computing em sua infraestrutura.
</p>

</div>

<div class="card">

<h2>🖥️ Virtualização</h2>

<p>
Virtualização é o processo de criar recursos computacionais virtuais a partir de recursos físicos.
</p>

<p>
Isso permite executar múltiplos sistemas operacionais independentes em um único servidor físico.
</p>

<h3>🎯 Objetivos da virtualização</h3>

<ul>
<li>Melhor aproveitamento de hardware</li>
<li>Redução de custos</li>
<li>Maior isolamento</li>
<li>Facilidade de backup</li>
<li>Alta disponibilidade</li>
<li>Escalabilidade</li>
</ul>

<h3>🧠 Exemplo real</h3>

<p>
Uma empresa possui um servidor físico extremamente poderoso.
Em vez de usar apenas um sistema operacional, ela divide os recursos criando várias máquinas virtuais independentes.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Virtualização NÃO significa obrigatoriamente Docker.
Docker utiliza conteinerização.
</p>

</div>

<div class="card">

<h2>🖥️ Máquina Virtual — VM</h2>

<p>
Máquina Virtual é um computador virtual completo executado dentro de outro computador.
</p>

<p>
Cada VM possui:
</p>

<ul>
<li>Sistema operacional próprio</li>
<li>Kernel próprio</li>
<li>Drivers próprios</li>
<li>Memória virtualizada</li>
<li>Processos independentes</li>
</ul>

<h3>🧠 Funcionamento</h3>

<p>
A VM utiliza um software chamado Hypervisor para acessar o hardware físico.
</p>

<p>
O hypervisor divide CPU, memória RAM, armazenamento e rede entre várias máquinas virtuais.
</p>

<h3>✅ Vantagens</h3>

<ul>
<li>Maior isolamento</li>
<li>Maior segurança</li>
<li>Compatibilidade com vários sistemas operacionais</li>
<li>Execução de kernels diferentes</li>
</ul>

<h3>❌ Desvantagens</h3>

<ul>
<li>Maior consumo de RAM</li>
<li>Maior consumo de CPU</li>
<li>Inicialização mais lenta</li>
<li>Maior uso de disco</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
VM NÃO compartilha kernel.
Cada VM possui kernel próprio.
</p>

</div>

<div class="card">

<h2>⚙️ Hypervisor</h2>

<p>
Hypervisor é o software responsável por criar, gerenciar e executar máquinas virtuais.
</p>

<h3>📌 Funções</h3>

<ul>
<li>Gerenciar hardware virtual</li>
<li>Distribuir recursos</li>
<li>Controlar VMs</li>
<li>Isolar ambientes</li>
<li>Gerenciar execução</li>
</ul>

<h3>🧠 Analogia</h3>

<p>
O Hypervisor funciona como um administrador de condomínio distribuindo recursos entre os moradores (VMs).
</p>

</div>

<div class="card">

<h2>🧱 Hypervisor Tipo 1</h2>

<p>
Também chamado de Bare-Metal.
</p>

<p>
Executa diretamente sobre o hardware físico sem depender de sistema operacional host.
</p>

<h3>✅ Vantagens</h3>

<ul>
<li>Maior desempenho</li>
<li>Menor overhead</li>
<li>Maior segurança</li>
<li>Mais usado em datacenters</li>
</ul>

<h3>📌 Exemplos</h3>

<ul>
<li>VMware ESXi</li>
<li>Hyper-V</li>
<li>Xen</li>
<li>Proxmox</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Tipo 1 = direto no hardware.
</p>

</div>

<div class="card">

<h2>🖥️ Hypervisor Tipo 2</h2>

<p>
Executa sobre um sistema operacional host.
</p>

<p>
O hypervisor funciona como um programa comum instalado no Windows, Linux ou macOS.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>VirtualBox</li>
<li>VMware Workstation</li>
</ul>

<h3>❌ Desvantagens</h3>

<ul>
<li>Mais lento</li>
<li>Maior overhead</li>
<li>Depende do sistema host</li>
</ul>

<h3>⚠️ Pegadinha clássica</h3>

<p>
VirtualBox = Hypervisor Tipo 2.
</p>

</div>

<div class="card">

<h2>🐳 Docker</h2>

<p>
Docker é uma plataforma de conteinerização.
</p>

<p>
Ele permite criar ambientes isolados chamados containers.
</p>

<p>
Diferente das VMs, containers NÃO possuem sistema operacional completo próprio.
</p>

<h3>🧠 Funcionamento</h3>

<p>
Containers compartilham o kernel do sistema operacional host.
</p>

<p>
Isso reduz drasticamente:
</p>

<ul>
<li>Consumo de RAM</li>
<li>Tempo de inicialização</li>
<li>Uso de disco</li>
<li>Consumo de CPU</li>
</ul>

<h3>🧠 Tecnologias internas</h3>

<ul>
<li>Namespaces</li>
<li>cgroups</li>
<li>UnionFS</li>
</ul>

<h3>📌 Namespaces</h3>

<p>
Criam isolamento entre processos.
</p>

<h3>📌 cgroups</h3>

<p>
Controlam recursos como CPU e memória.
</p>

<h3>📌 UnionFS</h3>

<p>
Permite camadas de imagens Docker.
</p>

<h3>⚠️ Pegadinha MUITO importante</h3>

<p>
Docker NÃO virtualiza hardware completo.
</p>

<p>
Docker compartilha o kernel do host.
</p>

</div>

<div class="card">

<h2>📦 Container</h2>

<p>
Container é um ambiente isolado contendo:
</p>

<ul>
<li>Aplicação</li>
<li>Bibliotecas</li>
<li>Dependências</li>
<li>Configurações</li>
<li>Arquivos necessários</li>
</ul>

<h3>🧠 Objetivo</h3>

<p>
Garantir que a aplicação funcione igual em qualquer ambiente.
</p>

<h3>🧠 Exemplo real</h3>

<p>
Um sistema funciona no computador do desenvolvedor mas quebra no servidor.
</p>

<p>
Containers resolvem esse problema empacotando todo ambiente necessário.
</p>

</div>

<div class="card">

<h2>⚔️ VM vs Container</h2>

<table>

<tr>
<th>VM</th>
<th>Container</th>
</tr>

<tr>
<td>Kernel próprio</td>
<td>Compartilha kernel</td>
</tr>

<tr>
<td>Mais pesada</td>
<td>Mais leve</td>
</tr>

<tr>
<td>Mais lenta</td>
<td>Mais rápida</td>
</tr>

<tr>
<td>Maior isolamento</td>
<td>Menor isolamento</td>
</tr>

<tr>
<td>Maior consumo</td>
<td>Menor consumo</td>
</tr>

</table>

<h3>⚠️ Pegadinha</h3>

<p>
Container NÃO substitui VM em todos os casos.
</p>

</div>

<div class="card">

<h2>📜 Principais comandos Docker</h2>

<ul>
<li><b>docker ps</b> → containers ativos</li>
<li><b>docker ps -a</b> → todos containers</li>
<li><b>docker pull</b> → baixar imagem</li>
<li><b>docker run</b> → executar container</li>
<li><b>docker run -it</b> → terminal interativo</li>
<li><b>docker stop</b> → parar container</li>
<li><b>docker rm</b> → remover container</li>
<li><b>docker exec -it</b> → acessar container</li>
<li><b>docker images</b> → listar imagens</li>
<li><b>docker image rm</b> → remover imagem</li>
</ul>

</div>

<div class="card">

<h2>☁️ Cloud Computing</h2>

<p>
Cloud Computing é o fornecimento de serviços computacionais pela internet.
</p>

<p>
A empresa deixa de comprar infraestrutura física e passa a utilizar recursos sob demanda.
</p>

<h3>📌 Recursos fornecidos</h3>

<ul>
<li>Servidores</li>
<li>Banco de dados</li>
<li>Rede</li>
<li>Armazenamento</li>
<li>Aplicações</li>
<li>Funções serverless</li>
</ul>

<h3>✅ Vantagens</h3>

<ul>
<li>Escalabilidade</li>
<li>Redução de custos</li>
<li>Alta disponibilidade</li>
<li>Elasticidade</li>
<li>Pagamento sob demanda</li>
</ul>

</div>

<div class="card">

<h2>🏗️ IaaS</h2>

<p>
Infrastructure as a Service.
</p>

<p>
O provedor entrega infraestrutura virtualizada.
</p>

<p>
O cliente gerencia:
</p>

<ul>
<li>Sistema operacional</li>
<li>Aplicações</li>
<li>Configurações</li>
</ul>

<h3>📌 Exemplos</h3>

<ul>
<li>AWS EC2</li>
<li>Azure VM</li>
<li>Google Compute Engine</li>
</ul>

<h3>🧠 Cola mental</h3>

<p>
IaaS = aluguei o computador virtual.
</p>

</div>

<div class="card">

<h2>⚙️ PaaS</h2>

<p>
Platform as a Service.
</p>

<p>
Entrega uma plataforma pronta para desenvolvimento.
</p>

<p>
O desenvolvedor foca no código.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Heroku</li>
<li>Google App Engine</li>
</ul>

<h3>🧠 Cola mental</h3>

<p>
PaaS = eu programo.
</p>

</div>

<div class="card">

<h2>🌐 SaaS</h2>

<p>
Software as a Service.
</p>

<p>
O usuário apenas utiliza o software pronto pela internet.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Gmail</li>
<li>Google Docs</li>
<li>Netflix</li>
<li>Microsoft 365</li>
</ul>

<h3>🧠 Cola mental</h3>

<p>
SaaS = eu só uso.
</p>

</div>

<div class="card">

<h2>⚡ FaaS</h2>

<p>
Function as a Service.
</p>

<p>
Executa funções sob demanda.
</p>

<p>
Muito relacionado ao conceito de Serverless.
</p>

<h3>📌 Exemplo</h3>

<p>
AWS Lambda.
</p>

<h3>🧠 Cola mental</h3>

<p>
FaaS = executo pequenas funções automaticamente.
</p>

</div>

<div class="card">

<h2>🖥️ Mainframe</h2>

<p>
Mainframe é um computador de altíssimo desempenho utilizado para processamento em larga escala.
</p>

<p>
São extremamente utilizados em:
</p>

<ul>
<li>Bancos</li>
<li>Grandes empresas</li>
<li>Sistemas governamentais</li>
<li>Processamento massivo de dados</li>
</ul>

<h3>🧠 Características</h3>

<ul>
<li>Alta disponibilidade</li>
<li>Grande capacidade de processamento</li>
<li>Redundância</li>
<li>Alta confiabilidade</li>
<li>Execução simultânea de milhares de operações</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Mainframe NÃO é supercomputador.
</p>

<p>
Mainframe é focado em:
</p>

<ul>
<li>Confiabilidade</li>
<li>Disponibilidade</li>
<li>Processamento corporativo</li>
</ul>

<h3>📌 Importante</h3>

<p>
Os primeiros conceitos modernos de virtualização surgiram em ambientes mainframe da IBM.
</p>

</div>

<div class="card">

<h2>⏳ Time Sharing</h2>

<p>
Time Sharing significa compartilhamento de tempo de processamento.
</p>

<p>
Foi um dos conceitos que originou a virtualização moderna.
</p>

<h3>🧠 Funcionamento</h3>

<p>
O processador alterna rapidamente entre diversos processos e usuários.
</p>

<p>
Isso cria a sensação de execução simultânea.
</p>

<h3>🎯 Objetivos</h3>

<ul>
<li>Melhor aproveitamento da CPU</li>
<li>Execução multiusuário</li>
<li>Maior eficiência computacional</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Os processos NÃO executam literalmente ao mesmo tempo em CPUs antigas.
</p>

<p>
O sistema alterna entre eles rapidamente.
</p>

</div>

<div class="card">

<h2>🧠 ISA — Instruction Set Architecture</h2>

<p>
ISA significa Arquitetura do Conjunto de Instruções.
</p>

<p>
Ela define como software e hardware se comunicam.
</p>

<h3>📌 Define:</h3>

<ul>
<li>Instruções do processador</li>
<li>Registradores</li>
<li>Memória</li>
<li>Interrupções</li>
<li>Operações da CPU</li>
</ul>

<h3>🧠 Importância</h3>

<p>
O Hypervisor precisa lidar diretamente com instruções privilegiadas da ISA para virtualizar sistemas operacionais.
</p>

<h3>⚠️ Pegadinha MUITO IMPORTANTE</h3>

<p>
ISA é uma interface entre:
</p>

<ul>
<li>Hardware</li>
<li>Software</li>
</ul>

</div>

<div class="card">

<h2>⚙️ VMM — Virtual Machine Monitor</h2>

<p>
VMM é outro nome utilizado para Hypervisor.
</p>

<p>
Seu objetivo é controlar máquinas virtuais e gerenciar recursos virtualizados.
</p>

<h3>📌 Responsabilidades</h3>

<ul>
<li>Executar VMs</li>
<li>Controlar memória</li>
<li>Gerenciar CPU</li>
<li>Isolar ambientes</li>
<li>Interceptar instruções privilegiadas</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
VMM e Hypervisor normalmente representam o mesmo conceito.
</p>

</div>

<div class="card">

<h2>🧩 Módulos do Hypervisor</h2>

<p>
O Hypervisor é dividido internamente em módulos responsáveis pela coordenação da virtualização.
</p>

<h3>📌 Dispatcher</h3>

<p>
Responsável por redirecionar instruções emitidas pelas máquinas virtuais.
</p>

<h3>📌 Allocator</h3>

<p>
Responsável por decidir quais recursos serão fornecidos para cada VM.
</p>

<p>
Controla:
</p>

<ul>
<li>CPU</li>
<li>RAM</li>
<li>Disco</li>
<li>Rede</li>
</ul>

<h3>📌 Interpreter</h3>

<p>
Executa instruções privilegiadas realizadas pelas máquinas virtuais.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
O Hypervisor precisa interceptar instruções críticas por questões de segurança.
</p>

</div>

<div class="card">

<h2>⚠️ Problemas da Virtualização</h2>

<h3>📌 Overhead</h3>

<p>
Virtualização adiciona consumo extra de processamento.
</p>

<h3>📌 Isolamento</h3>

<p>
As VMs precisam ser totalmente isoladas umas das outras.
</p>

<h3>📌 Instruções privilegiadas</h3>

<p>
Sistemas convidados não podem executar diretamente certas instruções do hardware físico.
</p>

<h3>📌 Consumo de recursos</h3>

<ul>
<li>RAM</li>
<li>CPU</li>
<li>Disco</li>
<li>Energia</li>
</ul>

</div>

<div class="card">

<h2>🐳 Docker Compose</h2>

<p>
Docker Compose é uma ferramenta utilizada para definir e executar múltiplos containers simultaneamente.
</p>

<h3>🧠 Objetivo</h3>

<p>
Facilitar gerenciamento de aplicações compostas por vários serviços.
</p>

<h3>🧠 Exemplo real</h3>

<p>
Uma aplicação pode possuir:
</p>

<ul>
<li>Frontend</li>
<li>Backend</li>
<li>Banco de dados</li>
<li>Redis</li>
</ul>

<p>
O Docker Compose sobe tudo automaticamente.
</p>

<h3>📌 Arquivo importante</h3>

<p>
docker-compose.yml
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Compose NÃO substitui Docker.
</p>

<p>
Compose apenas organiza múltiplos containers.
</p>

</div>

<div class="card">

<h2>🐳 Docker Swarm</h2>

<p>
Docker Swarm é uma ferramenta nativa de orquestração do Docker.
</p>

<p>
Ela permite distribuir containers em vários servidores.
</p>

<h3>📌 Funções</h3>

<ul>
<li>Clusterização</li>
<li>Escalabilidade</li>
<li>Balanceamento</li>
<li>Alta disponibilidade</li>
<li>Deploy distribuído</li>
</ul>

<h3>📌 Estrutura</h3>

<ul>
<li>Manager</li>
<li>Workers</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Docker Swarm compete com Kubernetes.
</p>

</div>

<div class="card">

<h2>🖼️ Docker Image</h2>

<p>
Imagem Docker é um pacote contendo tudo necessário para criar um container.
</p>

<h3>📌 Contém</h3>

<ul>
<li>Aplicação</li>
<li>Dependências</li>
<li>Bibliotecas</li>
<li>Configurações</li>
<li>Variáveis</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Imagem NÃO é container.
</p>

<p>
Container é uma instância da imagem em execução.
</p>

</div>

<div class="card">

<h2>📜 Dockerfile</h2>

<p>
Dockerfile é um arquivo de texto contendo instruções para construir imagens Docker.
</p>

<h3>📌 Exemplos de instruções</h3>

<ul>
<li>FROM</li>
<li>RUN</li>
<li>COPY</li>
<li>CMD</li>
<li>EXPOSE</li>
</ul>

<h3>🧠 Objetivo</h3>

<p>
Automatizar construção de imagens.
</p>

</div>

<div class="card">

<h2>🏗️ Build</h2>

<p>
Build é o processo de criação de uma imagem Docker.
</p>

<h3>📌 Comando</h3>

<p>
docker build
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Build cria IMAGEM.
</p>

<p>
docker run executa CONTAINER.
</p>

</div>

<div class="card">

<h2>🏷️ Tag</h2>

<p>
Tag é um rótulo utilizado para identificar versões de imagens Docker.
</p>

<h3>🧠 Exemplo</h3>

<p>
nginx:latest
</p>

<p>
latest = tag
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Uma mesma imagem pode possuir múltiplas tags.
</p>

</div>

<div class="card">

<h2>📦 Repositório e Registry</h2>

<h3>📌 Repositório</h3>

<p>
Coleção de imagens relacionadas.
</p>

<h3>📌 Registry</h3>

<p>
Serviço responsável por armazenar repositórios Docker.
</p>

<h3>📌 Exemplo</h3>

<p>
Docker Hub.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Docker Hub é um REGISTRY.
</p>

</div>

<div class="card">

<h2>💾 Volumes</h2>

<p>
Volumes são mecanismos de armazenamento persistente no Docker.
</p>

<h3>🧠 Objetivo</h3>

<p>
Garantir que dados não sejam perdidos quando containers forem removidos.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Bancos de dados</li>
<li>Logs</li>
<li>Uploads</li>
<li>Arquivos persistentes</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Container pode morrer.
</p>

<p>
Volume permanece.
</p>

</div>
`,

2: `

<h1>🔒 Parte 2 — Segurança da Informação EXTREMA 😈</h1>

<div class="card">

<h2>🛡️ O que é Segurança da Informação?</h2>

<p>
Segurança da Informação é a área responsável por proteger informações, sistemas, redes e infraestrutura contra acessos não autorizados, alterações indevidas, indisponibilidade e vazamentos.
</p>

<p>
Ela NÃO envolve apenas tecnologia.
Também envolve:
</p>

<ul>
<li>Pessoas</li>
<li>Processos</li>
<li>Políticas</li>
<li>Treinamentos</li>
<li>Controle organizacional</li>
</ul>

<h3>🧠 Objetivo principal</h3>

<p>
Garantir que a informação continue:
</p>

<ul>
<li>Segura</li>
<li>Correta</li>
<li>Disponível</li>
<li>Confiável</li>
</ul>

<h3>⚠️ Pegadinha de prova</h3>

<p>
Segurança NÃO significa impedir acesso totalmente.
Significa controlar acesso.
</p>

</div>

<div class="card">

<h2>🧱 Tríade CID</h2>

<p>
Os 3 pilares da segurança são:
</p>

<ul>
<li><b>C</b>onfidencialidade</li>
<li><b>I</b>ntegridade</li>
<li><b>D</b>isponibilidade</li>
</ul>

<p>
Essa tríade é chamada de:
</p>

<ul>
<li>CID</li>
<li>CIA Triad</li>
<li>Tríade da Segurança</li>
</ul>

<h3>⚠️ MUITO IMPORTANTE</h3>

<p>
Grande parte das questões da faculdade giram ao redor desses 3 pilares.
</p>

</div>

<div class="card">

<h2>🔐 Confidencialidade</h2>

<p>
Garantia de que apenas pessoas autorizadas possam acessar determinada informação.
</p>

<h3>🧠 Exemplos</h3>

<ul>
<li>Login e senha</li>
<li>Criptografia</li>
<li>Controle de acesso</li>
<li>Permissões</li>
<li>Autenticação</li>
</ul>

<h3>🧠 Exemplo real</h3>

<p>
Um funcionário do RH pode visualizar salários.
Um funcionário comum não.
</p>

<h3>⚠️ Pegadinhas</h3>

<p>
Se a questão falar:
</p>

<ul>
<li>Sigilo</li>
<li>Privacidade</li>
<li>Acesso autorizado</li>
<li>Proteção contra vazamento</li>
</ul>

<p>
➡️ pense em CONFIDENCIALIDADE.
</p>

</div>

<div class="card">

<h2>🧩 Integridade</h2>

<p>
Garantia de que a informação não seja alterada indevidamente.
</p>

<p>
Os dados devem permanecer:
</p>

<ul>
<li>Corretos</li>
<li>Completos</li>
<li>Confiáveis</li>
</ul>

<h3>🧠 Exemplos</h3>

<ul>
<li>Hash</li>
<li>Assinatura digital</li>
<li>Controle de alterações</li>
</ul>

<h3>🧠 Exemplo real</h3>

<p>
Um invasor altera o valor de uma transferência bancária.
</p>

<p>
A integridade foi comprometida.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Integridade NÃO significa sigilo.
</p>

</div>

<div class="card">

<h2>🌐 Disponibilidade</h2>

<p>
Garantia de que sistemas e dados estejam acessíveis quando necessários.
</p>

<h3>🧠 Exemplos</h3>

<ul>
<li>Redundância</li>
<li>Cluster</li>
<li>Backup</li>
<li>Nobreak</li>
<li>Load Balancer</li>
</ul>

<h3>🧠 Exemplo real</h3>

<p>
Um site bancário cai após ataque DDoS.
</p>

<p>
A disponibilidade foi afetada.
</p>

<h3>⚠️ Pegadinhas</h3>

<p>
Se a questão falar:
</p>

<ul>
<li>Sistema fora do ar</li>
<li>Queda</li>
<li>DDoS</li>
<li>Acesso contínuo</li>
<li>Alta disponibilidade</li>
</ul>

<p>
➡️ pense em DISPONIBILIDADE.
</p>

</div>

<div class="card">

<h2>🔑 Criptografia</h2>

<p>
Criptografia é o processo de transformar dados legíveis em dados codificados.
</p>

<p>
Seu objetivo é impedir que pessoas não autorizadas entendam a informação.
</p>

<h3>🧠 Processo</h3>

<ul>
<li>Texto original → plaintext</li>
<li>Texto criptografado → ciphertext</li>
<li>Descriptografia → retorno ao original</li>
</ul>

</div>

<div class="card">

<h2>🔒 Criptografia Simétrica</h2>

<p>
Utiliza a MESMA chave para criptografar e descriptografar.
</p>

<h3>✅ Vantagens</h3>

<ul>
<li>Muito rápida</li>
<li>Baixo processamento</li>
<li>Boa para grandes volumes</li>
</ul>

<h3>❌ Problema</h3>

<p>
Troca segura da chave.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>AES</li>
<li>DES</li>
<li>3DES</li>
</ul>

<h3>⚠️ Pegadinha clássica</h3>

<p>
Mesma chave = simétrica.
</p>

</div>

<div class="card">

<h2>🔐 Criptografia Assimétrica</h2>

<p>
Utiliza DUAS chaves:
</p>

<ul>
<li>Chave pública</li>
<li>Chave privada</li>
</ul>

<h3>🧠 Funcionamento</h3>

<p>
O que é criptografado com uma chave só pode ser descriptografado com a outra.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>RSA</li>
<li>HTTPS</li>
<li>Certificados digitais</li>
</ul>

<h3>✅ Vantagens</h3>

<ul>
<li>Maior segurança na troca de chaves</li>
<li>Assinaturas digitais</li>
</ul>

<h3>❌ Desvantagens</h3>

<ul>
<li>Mais lenta</li>
<li>Maior processamento</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Pública + privada = assimétrica.
</p>

</div>

<div class="card">

<h2>#️⃣ Hash</h2>

<p>
Hash NÃO é criptografia reversível.
</p>

<p>
Hash transforma dados em uma sequência fixa de caracteres.
</p>

<h3>📌 Características</h3>

<ul>
<li>Não reversível</li>
<li>Tamanho fixo</li>
<li>Usado para integridade</li>
</ul>

<h3>📌 Exemplos</h3>

<ul>
<li>SHA-256</li>
<li>MD5</li>
</ul>

<h3>🧠 Uso comum</h3>

<p>
Armazenamento seguro de senhas.
</p>

<h3>⚠️ Pegadinha MUITO IMPORTANTE</h3>

<p>
Hash NÃO descriptografa.
</p>

</div>

<div class="card">

<h2>🕵️ Pentest</h2>

<p>
Pentest significa Penetration Test.
</p>

<p>
É um teste de invasão AUTORIZADO.
</p>

<h3>🧠 Objetivo</h3>

<p>
Encontrar vulnerabilidades antes de invasores reais.
</p>

<h3>📌 Etapas comuns</h3>

<ul>
<li>Reconhecimento</li>
<li>Mapeamento</li>
<li>Exploração</li>
<li>Pós-exploração</li>
<li>Relatório</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Pentest NÃO é crime quando autorizado.
</p>

</div>

<div class="card">

<h2>🎭 Engenharia Social</h2>

<p>
Técnica de manipulação psicológica usada para obter acesso ou informações.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Phishing</li>
<li>Ligação falsa</li>
<li>Email falso</li>
<li>Falso suporte técnico</li>
</ul>

<h3>🧠 Ponto importante</h3>

<p>
Explora o ser humano.
</p>

<p>
Não necessariamente falhas técnicas.
</p>

<h3>⚠️ Pegadinha clássica</h3>

<p>
Engenharia social ≠ hackear sistema diretamente.
</p>

</div>

<div class="card">

<h2>⚠️ Vulnerabilidade</h2>

<p>
Vulnerabilidade é uma fraqueza explorável.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Senha fraca</li>
<li>Sistema desatualizado</li>
<li>Porta aberta</li>
<li>Erro de configuração</li>
</ul>

</div>

<div class="card">

<h2>💀 Ameaça</h2>

<p>
Qualquer elemento capaz de causar dano.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Malware</li>
<li>Hacker</li>
<li>Ransomware</li>
<li>Desastre natural</li>
</ul>

</div>

<div class="card">

<h2>☢️ Risco</h2>

<p>
Probabilidade de uma ameaça explorar uma vulnerabilidade.
</p>

<h3>🧠 Fórmula mental</h3>

<p>
Ameaça + Vulnerabilidade = Risco
</p>

</div>

<div class="card">

<h2>📜 ISO 27001</h2>

<p>
Norma internacional para Gestão da Segurança da Informação.
</p>

<h3>🧠 Objetivo</h3>

<p>
Criar políticas, controles e processos para proteger informações.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
27001 = Gestão da Segurança.
</p>

</div>

<div class="card">

<h2>📊 ISO 27005</h2>

<p>
Norma focada em Gestão de Riscos em Segurança da Informação.
</p>

<h3>🧠 Objetivo</h3>

<p>
Identificar, analisar, avaliar e tratar riscos.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
27005 = Gestão de Riscos.
</p>

</div>

<div class="card">

<h2>🌐 HTTPS</h2>

<p>
HTTPS é a versão segura do HTTP.
</p>

<p>
Utiliza:
</p>

<ul>
<li>SSL/TLS</li>
<li>Criptografia</li>
<li>Certificados digitais</li>
</ul>

<h3>🧠 Objetivos</h3>

<ul>
<li>Confidencialidade</li>
<li>Integridade</li>
<li>Autenticação</li>
</ul>

</div>

<div class="card">

<h2>💀 Malware</h2>

<p>
Software malicioso criado para causar dano.
</p>

<h3>📌 Tipos</h3>

<ul>
<li>Vírus</li>
<li>Worm</li>
<li>Trojan</li>
<li>Spyware</li>
<li>Ransomware</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Worm se replica sozinho.
</p>

<p>
Trojan depende do usuário executar.
</p>

</div>

<div class="card">

<h2>🚨 Ransomware</h2>

<p>
Malware que sequestra arquivos exigindo pagamento.
</p>

<h3>🧠 Normalmente utiliza:</h3>

<ul>
<li>Criptografia</li>
<li>Extorsão</li>
<li>Engenharia social</li>
</ul>

</div>

<div class="card">

<h2>🧠 Pirâmide do Conhecimento</h2>

<p>
A pirâmide do conhecimento mostra a evolução dos dados até se tornarem sabedoria.
</p>

<h3>📌 Ordem</h3>

<ul>
<li><b>Dados</b> → fatos brutos, sem interpretação</li>
<li><b>Informação</b> → dados organizados com significado</li>
<li><b>Conhecimento</b> → interpretação e aplicação da informação</li>
<li><b>Sabedoria</b> → uso estratégico do conhecimento para tomar decisões</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Dados sozinhos não são informação. Eles precisam de contexto.
</p>

</div>

<div class="card">

<h2>🏢 Informação como Ativo Empresarial</h2>

<p>
Informação é considerada um ativo da empresa porque possui valor estratégico.
</p>

<p>
Ela ajuda na tomada de decisões, continuidade dos negócios, vantagem competitiva e proteção dos interesses da organização.
</p>

<h3>📌 Exemplos de ativos</h3>

<ul>
<li>Banco de dados de clientes</li>
<li>Contratos</li>
<li>Projetos internos</li>
<li>Credenciais de acesso</li>
<li>Documentos financeiros</li>
<li>Código-fonte</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Ativo não é só hardware. Informação também é ativo.
</p>

</div>

<div class="card">

<h2>📜 Política de Segurança da Informação</h2>

<p>
Política de Segurança da Informação é um conjunto formal de regras, diretrizes e normas usadas para proteger os ativos da informação.
</p>

<p>
Ela define direitos, deveres, permissões, restrições e responsabilidades dos usuários.
</p>

<h3>📌 Objetivos</h3>

<ul>
<li>Proteger dados da empresa</li>
<li>Definir regras de acesso</li>
<li>Reduzir riscos</li>
<li>Orientar colaboradores</li>
<li>Padronizar práticas de segurança</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Política de segurança não é apenas ferramenta técnica. É regra organizacional.
</p>

</div>

<div class="card">

<h2>🧱 Controles de Segurança</h2>

<p>
Controles de segurança são medidas usadas para reduzir riscos e proteger informações.
</p>

<h3>📌 Controle Físico</h3>

<p>
Limita o acesso físico aos ativos.
</p>

<ul>
<li>Portas</li>
<li>Trancas</li>
<li>Câmeras</li>
<li>Guardas</li>
<li>Biometria física</li>
</ul>

<h3>📌 Controle Lógico</h3>

<p>
Limita o acesso digital aos sistemas.
</p>

<ul>
<li>Senhas</li>
<li>Firewall</li>
<li>Criptografia</li>
<li>Controle de acesso</li>
<li>Autenticação</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Tranca na porta = controle físico.
Senha no sistema = controle lógico.
</p>

</div>

<div class="card">

<h2>📊 Gestão de Riscos</h2>

<p>
Gestão de riscos é o processo de identificar, analisar, avaliar e tratar riscos que podem afetar os ativos de informação.
</p>

<p>
O objetivo não é eliminar todos os riscos, mas reduzi-los a níveis aceitáveis para a organização.
</p>

<h3>📌 Etapas principais</h3>

<ul>
<li>Identificação de ameaças</li>
<li>Identificação de vulnerabilidades</li>
<li>Análise de probabilidade</li>
<li>Análise de impacto</li>
<li>Determinação do risco</li>
<li>Recomendação de controles</li>
<li>Documentação dos resultados</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Risco não é eliminado totalmente. Ele é reduzido, mitigado ou aceito.
</p>

</div>

<div class="card">

<h2>⚠️ Ameaça, Vulnerabilidade, Desastre e Risco</h2>

<h3>📌 Ameaça</h3>
<p>
Qualquer evento ou agente que possa causar dano.
</p>

<h3>📌 Vulnerabilidade</h3>
<p>
Fraqueza que pode ser explorada por uma ameaça.
</p>

<h3>📌 Desastre</h3>
<p>
Impacto causado quando uma ameaça se concretiza e gera prejuízo.
</p>

<h3>📌 Risco</h3>
<p>
Probabilidade de uma ameaça explorar uma vulnerabilidade.
</p>

<h3>🧠 Fórmula mental</h3>

<p>
Ameaça + Vulnerabilidade = Risco
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Ameaça é o perigo. Vulnerabilidade é a fraqueza. Risco é a chance do problema acontecer.
</p>

</div>

<div class="card">

<h2>📈 Análise de Probabilidade</h2>

<p>
A análise de probabilidade mede a chance de uma ameaça se transformar em incidente.
</p>

<h3>📌 Níveis comuns</h3>

<ul>
<li><b>Alta:</b> ameaça evidente e poucos controles efetivos</li>
<li><b>Média:</b> ameaça existe, mas há controles atuando</li>
<li><b>Baixa:</b> ameaça pouco provável e controles eficientes</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Probabilidade não mede o tamanho do prejuízo. Mede a chance de acontecer.
</p>

</div>

<div class="card">

<h2>💥 Análise de Impacto</h2>

<p>
A análise de impacto mede o prejuízo que um incidente pode causar ao negócio.
</p>

<h3>📌 Pode afetar</h3>

<ul>
<li>Confidencialidade</li>
<li>Integridade</li>
<li>Disponibilidade</li>
<li>Imagem da empresa</li>
<li>Operações</li>
<li>Financeiro</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Impacto não é a chance de acontecer. Impacto é o dano se acontecer.
</p>

</div>

<div class="card">

<h2>📉 Análise Qualitativa e Quantitativa</h2>

<h3>📌 Qualitativa</h3>

<p>
Classifica riscos por níveis, como baixo, médio ou alto.
</p>

<h3>📌 Quantitativa</h3>

<p>
Usa valores numéricos, custos e métricas financeiras.
</p>

<h3>🧠 Exemplo</h3>

<p>
Qualitativa: risco alto.
</p>

<p>
Quantitativa: prejuízo estimado de R$ 50.000.
</p>

</div>

<div class="card">

<h2>🛡️ Tratamento de Riscos</h2>

<p>
Após identificar e analisar riscos, a empresa precisa decidir como lidar com eles.
</p>

<h3>📌 Estratégias</h3>

<ul>
<li><b>Mitigar:</b> reduzir o risco</li>
<li><b>Aceitar:</b> conviver com o risco</li>
<li><b>Transferir:</b> passar o risco para terceiros, como seguro</li>
<li><b>Evitar:</b> eliminar a atividade que gera o risco</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Mitigar não é eliminar. Mitigar é reduzir.
</p>

</div>

<div class="card">

<h2>🔁 Abordagem Reativa</h2>

<p>
A abordagem reativa ocorre depois que o incidente já aconteceu.
</p>

<h3>📌 Envolve</h3>

<ul>
<li>Auditoria</li>
<li>Análise do incidente</li>
<li>Documentação</li>
<li>Correção</li>
<li>Prevenção de reincidência</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Reativa = agir depois do problema.
</p>

</div>

<div class="card">

<h2>🚀 Abordagem Proativa</h2>

<p>
A abordagem proativa busca evitar incidentes antes que aconteçam.
</p>

<h3>📌 Envolve</h3>

<ul>
<li>Análise de logs</li>
<li>Pesquisa de falhas</li>
<li>Monitoramento</li>
<li>Implementação preventiva de controles</li>
<li>Testes de segurança</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Proativa = agir antes do problema.
</p>

</div>

<div class="card">

<h2>📚 ISO/IEC 27000</h2>

<p>
Norma base da família ISO 27000.
</p>

<p>
Ela apresenta vocabulário, conceitos e fundamentos relacionados à gestão da segurança da informação.
</p>

<h3>🧠 Cola mental</h3>

<p>
27000 = vocabulário e base conceitual.
</p>

</div>

<div class="card">

<h2>📜 ISO/IEC 27001</h2>

<p>
Norma que define requisitos para um Sistema de Gestão de Segurança da Informação, conhecido como SGSI.
</p>

<p>
É a principal norma para certificação em segurança da informação.
</p>

<h3>📌 Objetivo</h3>

<ul>
<li>Definir controles</li>
<li>Gerenciar segurança</li>
<li>Proteger ativos</li>
<li>Melhorar processos</li>
<li>Permitir certificação</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
27001 = requisitos e certificação do SGSI.
</p>

</div>

<div class="card">

<h2>📘 ISO/IEC 27002</h2>

<p>
Norma de boas práticas e controles de segurança.
</p>

<p>
Ela complementa a ISO 27001, orientando como aplicar controles de segurança.
</p>

<h3>🧠 Cola mental</h3>

<p>
27002 = boas práticas e controles.
</p>

</div>

<div class="card">

<h2>📗 ISO/IEC 27003</h2>

<p>
Norma que fornece orientação para implementação de um SGSI.
</p>

<h3>🧠 Cola mental</h3>

<p>
27003 = ajuda a implementar o sistema de gestão.
</p>

</div>

<div class="card">

<h2>📊 ISO/IEC 27005</h2>

<p>
Norma voltada para gestão de riscos em segurança da informação.
</p>

<h3>📌 Objetivo</h3>

<ul>
<li>Identificar riscos</li>
<li>Analisar riscos</li>
<li>Avaliar riscos</li>
<li>Tratar riscos</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
27005 = gestão de riscos.
</p>

</div>

<div class="card">

<h2>🔥 Cola Mental da Parte 2</h2>

<ul>
<li><b>Dados</b> → fatos brutos</li>
<li><b>Informação</b> → dados com significado</li>
<li><b>Conhecimento</b> → interpretação</li>
<li><b>Sabedoria</b> → decisão estratégica</li>
<li><b>Confidencialidade</b> → sigilo</li>
<li><b>Integridade</b> → não alteração</li>
<li><b>Disponibilidade</b> → acesso quando necessário</li>
<li><b>Ameaça</b> → perigo</li>
<li><b>Vulnerabilidade</b> → fraqueza</li>
<li><b>Risco</b> → probabilidade</li>
<li><b>Reativa</b> → depois do incidente</li>
<li><b>Proativa</b> → antes do incidente</li>
<li><b>27001</b> → SGSI/certificação</li>
<li><b>27005</b> → riscos</li>
</ul>

</div>
`,

3: `

<h1>⚖️ Parte 3 — LGPD, Marco Civil, Linux e Sistemas 😈</h1>

<div class="card">

<h2>📚 Introdução</h2>

<p>
A área de tecnologia não envolve apenas programação e infraestrutura.
</p>

<p>
Aspectos legais, privacidade, segurança, sistemas operacionais e administração Linux são fundamentais em ambientes corporativos modernos.
</p>

<p>
Hoje praticamente toda infraestrutura crítica utiliza Linux, cloud computing e políticas relacionadas à proteção de dados.
</p>

</div>

<div class="card">

<h2>⚖️ LGPD — Lei Geral de Proteção de Dados</h2>

<p>
A LGPD é a legislação brasileira responsável por regulamentar o tratamento de dados pessoais.
</p>

<p>
Ela define regras sobre:
</p>

<ul>
<li>Coleta de dados</li>
<li>Armazenamento</li>
<li>Compartilhamento</li>
<li>Processamento</li>
<li>Exclusão</li>
<li>Segurança</li>
</ul>

<h3>🎯 Objetivo</h3>

<p>
Garantir privacidade, liberdade e proteção dos dados das pessoas.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
LGPD NÃO protege apenas dados digitais.
</p>

<p>
Dados físicos também entram na lei.
</p>

</div>

<div class="card">

<h2>🧍 Dados Pessoais</h2>

<p>
São dados que identificam ou podem identificar uma pessoa.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Nome</li>
<li>CPF</li>
<li>Email</li>
<li>Telefone</li>
<li>IP</li>
<li>Endereço</li>
<li>RG</li>
</ul>

<h3>⚠️ Pegadinha MUITO importante</h3>

<p>
IP pode ser considerado dado pessoal.
</p>

</div>

<div class="card">

<h2>☢️ Dados Sensíveis</h2>

<p>
São dados pessoais que podem gerar discriminação ou exposição grave.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Biometria</li>
<li>Religião</li>
<li>Origem racial</li>
<li>Dados médicos</li>
<li>Opinião política</li>
<li>Orientação sexual</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Todo dado sensível é pessoal.
</p>

<p>
Mas nem todo dado pessoal é sensível.
</p>

</div>

<div class="card">

<h2>🏢 Controlador e Operador</h2>

<h3>📌 Controlador</h3>

<p>
Decide como os dados serão utilizados.
</p>

<h3>📌 Operador</h3>

<p>
Executa o tratamento dos dados seguindo instruções do controlador.
</p>

<h3>🧠 Exemplo</h3>

<p>
Uma loja online coleta dados dos clientes.
</p>

<p>
A loja = controladora.
</p>

<p>
Empresa terceirizada que processa os dados = operadora.
</p>

</div>

<div class="card">

<h2>💰 Multas da LGPD</h2>

<p>
Empresas podem sofrer punições severas.
</p>

<h3>📌 Penalidades</h3>

<ul>
<li>Advertência</li>
<li>Bloqueio de dados</li>
<li>Exclusão de dados</li>
<li>Multas financeiras</li>
</ul>

<h3>📌 Multa</h3>

<p>
Pode chegar a:
</p>

<ul>
<li>2% do faturamento</li>
<li>Limitado a 50 milhões de reais</li>
</ul>

<h3>⚠️ Pegadinha clássica</h3>

<p>
A LGPD NÃO serve apenas para grandes empresas.
</p>

</div>

<div class="card">

<h2>🌐 Marco Civil da Internet</h2>

<p>
Lei brasileira que estabelece princípios, direitos e deveres no uso da internet.
</p>

<h3>📌 Objetivos</h3>

<ul>
<li>Privacidade</li>
<li>Liberdade de expressão</li>
<li>Neutralidade da rede</li>
<li>Proteção de dados</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Marco Civil NÃO é a mesma coisa que LGPD.
</p>

</div>

<div class="card">

<h2>⚖️ Neutralidade da Rede</h2>

<p>
Todo tráfego da internet deve ser tratado igualmente.
</p>

<p>
O provedor NÃO pode favorecer ou prejudicar determinados conteúdos.
</p>

<h3>🧠 Exemplo</h3>

<p>
Uma operadora não pode diminuir propositalmente velocidade do YouTube favorecendo outro streaming.
</p>

</div>

<div class="card">

<h2>🐧 Linux</h2>

<p>
Linux é um kernel baseado em Unix amplamente utilizado em:
</p>

<ul>
<li>Servidores</li>
<li>Cloud Computing</li>
<li>Segurança</li>
<li>Containers</li>
<li>Android</li>
<li>Supercomputadores</li>
</ul>

<h3>⚠️ Pegadinha MUITO IMPORTANTE</h3>

<p>
Linux tecnicamente é o KERNEL.
</p>

<p>
Distribuições Linux são sistemas completos.
</p>

</div>

<div class="card">

<h2>🧠 Kernel</h2>

<p>
Kernel é o núcleo do sistema operacional.
</p>

<p>
Ele faz a comunicação entre software e hardware.
</p>

<h3>📌 Responsabilidades</h3>

<ul>
<li>Gerenciar processos</li>
<li>Gerenciar memória</li>
<li>Gerenciar CPU</li>
<li>Gerenciar dispositivos</li>
<li>Controlar permissões</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Docker compartilha o kernel do host.
</p>

</div>

<div class="card">

<h2>⚙️ Shell</h2>

<p>
Shell é a interface que interpreta comandos enviados ao sistema operacional.
</p>

<h3>📌 Funções</h3>

<ul>
<li>Executar comandos</li>
<li>Executar scripts</li>
<li>Automatizar tarefas</li>
<li>Interagir com o kernel</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Shell NÃO é o kernel.
</p>

</div>

<div class="card">

<h2>💻 Bash</h2>

<p>
Bash é um dos shells mais utilizados em sistemas Linux.
</p>

<h3>📌 Características</h3>

<ul>
<li>Linha de comando</li>
<li>Scripts</li>
<li>Automação</li>
<li>Administração de sistemas</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Bash é um tipo de shell.
</p>

</div>

<div class="card">

<h2>📂 Sistema de Arquivos Linux</h2>

<p>
Linux organiza arquivos em uma árvore hierárquica.
</p>

<p>
Tudo começa pela raiz:
</p>

<h3>📌 /</h3>

<p>
Representa a raiz do sistema.
</p>

<h3>📌 Diretórios importantes</h3>

<ul>
<li><b>/home</b> → usuários</li>
<li><b>/etc</b> → configurações</li>
<li><b>/bin</b> → comandos essenciais</li>
<li><b>/var</b> → logs</li>
<li><b>/tmp</b> → arquivos temporários</li>
</ul>

</div>

<div class="card">

<h2>📜 Permissões Linux</h2>

<p>
Linux utiliza permissões para controlar acesso.
</p>

<h3>📌 Tipos</h3>

<ul>
<li>r → read</li>
<li>w → write</li>
<li>x → execute</li>
</ul>

<h3>📌 Aplicadas para:</h3>

<ul>
<li>Dono</li>
<li>Grupo</li>
<li>Outros</li>
</ul>

<h3>🧠 Exemplo</h3>

<p>
rwxr-xr--
</p>

<h3>⚠️ Pegadinha</h3>

<p>
777 = permissão TOTAL.
</p>

<p>
É extremamente perigoso em produção.
</p>

</div>

<div class="card">

<h2>📌 Comandos Linux IMPORTANTES</h2>

<ul>
<li><b>ls</b> → listar arquivos</li>
<li><b>cd</b> → navegar diretórios</li>
<li><b>pwd</b> → diretório atual</li>
<li><b>mkdir</b> → criar pasta</li>
<li><b>rm</b> → remover</li>
<li><b>cp</b> → copiar</li>
<li><b>mv</b> → mover</li>
<li><b>cat</b> → mostrar conteúdo</li>
<li><b>nano</b> → editar arquivo</li>
<li><b>chmod</b> → alterar permissões</li>
<li><b>sudo</b> → executar como administrador</li>
</ul>

</div>

<div class="card">

<h2>🧠 Processos</h2>

<p>
Processo é um programa em execução.
</p>

<h3>📌 Informações importantes</h3>

<ul>
<li>PID</li>
<li>Estado</li>
<li>Uso de memória</li>
<li>Uso de CPU</li>
</ul>

<h3>📌 Comandos</h3>

<ul>
<li><b>ps</b></li>
<li><b>top</b></li>
<li><b>htop</b></li>
<li><b>kill</b></li>
</ul>

</div>

<div class="card">

<h2>💾 Memória RAM e Swap</h2>

<p>
Swap é uma área do disco utilizada como extensão da RAM.
</p>

<h3>⚠️ Pegadinha MUITO IMPORTANTE</h3>

<p>
Swap NÃO é memória RAM real.
</p>

<p>
Swap é MUITO mais lenta.
</p>

<h3>🧠 Cola mental</h3>

<p>
RAM lotou → Linux joga dados para Swap.
</p>

</div>

<div class="card">

<h2>🧠 Escalonamento</h2>

<p>
Escalonamento é o gerenciamento da execução de processos pela CPU.
</p>

<h3>📌 Objetivos</h3>

<ul>
<li>Eficiência</li>
<li>Justiça</li>
<li>Desempenho</li>
<li>Tempo de resposta</li>
</ul>

<h3>📌 Algoritmos famosos</h3>

<ul>
<li>FIFO / FCFS</li>
<li>SJF</li>
<li>Round Robin</li>
<li>Prioridade</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
FIFO e FCFS são praticamente o mesmo conceito.
</p>

</div>

<div class="card">

<h2>🔄 Round Robin</h2>

<p>
Algoritmo de escalonamento circular.
</p>

<p>
Cada processo recebe um pequeno tempo de CPU chamado quantum.
</p>

<h3>🧠 Funcionamento</h3>

<p>
Se o processo não terminar:
</p>

<ul>
<li>ele sai da CPU</li>
<li>vai para o final da fila</li>
</ul>

<h3>✅ Vantagem</h3>

<p>
Maior justiça entre processos.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Quantum muito pequeno = muitas trocas de contexto.
</p>

</div>

<div class="card">

<h2>🧠 Threads</h2>

<p>
Thread é uma linha de execução dentro de um processo.
</p>

<h3>📌 Vantagens</h3>

<ul>
<li>Maior paralelismo</li>
<li>Melhor desempenho</li>
<li>Compartilhamento de memória</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Threads compartilham recursos do mesmo processo.
</p>

</div>

<div class="card">

<h2>🔥 Cola Mental FINAL 😈</h2>

<ul>

<li><b>LGPD</b> → proteção de dados</li>

<li><b>Marco Civil</b> → regras da internet</li>

<li><b>Linux</b> → kernel</li>

<li><b>Shell</b> → interface de comandos</li>

<li><b>Bash</b> → tipo de shell</li>

<li><b>Swap</b> → disco usado como RAM</li>

<li><b>Round Robin</b> → CPU em rodízio</li>

<li><b>FIFO</b> → primeiro entra primeiro sai</li>

<li><b>777</b> → permissão total</li>

<li><b>/</b> → raiz do Linux</li>

</ul>

</div>

<div class="card">

<h2>⚖️ LGPD — Lei Geral de Proteção de Dados</h2>

<p>
A LGPD é a lei brasileira responsável por regular o tratamento de dados pessoais.
</p>

<p>
Ela define regras sobre como empresas, instituições e órgãos públicos podem coletar, armazenar, compartilhar, processar e excluir dados pessoais.
</p>

<h3>🎯 Objetivo</h3>

<p>
Proteger a privacidade, a liberdade e os direitos fundamentais das pessoas.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
LGPD não protege apenas dados digitais. Dados em papel também podem estar protegidos.
</p>

</div>

<div class="card">

<h2>🧍 Dados Pessoais</h2>

<p>
Dados pessoais são informações que identificam ou podem identificar uma pessoa.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Nome completo</li>
<li>CPF</li>
<li>RG</li>
<li>Email</li>
<li>Telefone</li>
<li>Endereço</li>
<li>IP</li>
<li>Dados de localização</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Um dado não precisa identificar diretamente sozinho. Se ele puder identificar alguém quando combinado com outros dados, também pode ser considerado dado pessoal.
</p>

</div>

<div class="card">

<h2>☢️ Dados Sensíveis</h2>

<p>
Dados sensíveis são dados pessoais que exigem maior proteção, pois podem gerar discriminação, exposição ou danos mais graves ao titular.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Dados de saúde</li>
<li>Biometria</li>
<li>Religião</li>
<li>Opinião política</li>
<li>Origem racial ou étnica</li>
<li>Filiação sindical</li>
<li>Dados genéticos</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Todo dado sensível é dado pessoal, mas nem todo dado pessoal é sensível.
</p>

</div>

<div class="card">

<h2>👤 Titular dos Dados</h2>

<p>
Titular é a pessoa natural a quem os dados pertencem.
</p>

<h3>🧠 Exemplo</h3>

<p>
Se uma faculdade armazena seu CPF, telefone e email, você é o titular desses dados.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Empresa não é titular de dados pessoais. O titular é sempre uma pessoa natural.
</p>

</div>

<div class="card">

<h2>🏢 Controlador e Operador</h2>

<h3>📌 Controlador</h3>

<p>
É quem toma as decisões sobre o tratamento dos dados.
</p>

<h3>📌 Operador</h3>

<p>
É quem realiza o tratamento dos dados seguindo as instruções do controlador.
</p>

<h3>🧠 Exemplo</h3>

<p>
Uma loja online decide quais dados dos clientes serão coletados.
A loja é a controladora.
</p>

<p>
Uma empresa terceirizada que processa esses dados para a loja é a operadora.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Controlador decide. Operador executa.
</p>

</div>

<div class="card">

<h2>🔄 Tratamento de Dados</h2>

<p>
Tratamento é qualquer operação feita com dados pessoais.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li>Coletar</li>
<li>Armazenar</li>
<li>Consultar</li>
<li>Compartilhar</li>
<li>Processar</li>
<li>Transmitir</li>
<li>Excluir</li>
<li>Classificar</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Apenas guardar um dado já é uma forma de tratamento.
</p>

</div>

<div class="card">

<h2>✅ Consentimento</h2>

<p>
Consentimento é a autorização dada pelo titular para que seus dados sejam tratados.
</p>

<p>
Ele deve ser livre, informado e inequívoco.
</p>

<h3>📌 Na prática</h3>

<p>
A pessoa precisa saber claramente para que seus dados serão usados.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Consentimento não pode ser escondido em textos confusos ou forçado sem explicação.
</p>

</div>

<div class="card">

<h2>🛡️ ANPD</h2>

<p>
ANPD significa Autoridade Nacional de Proteção de Dados.
</p>

<p>
É o órgão responsável por fiscalizar e aplicar sanções relacionadas à LGPD.
</p>

<h3>📌 Funções</h3>

<ul>
<li>Fiscalizar empresas</li>
<li>Orientar sobre proteção de dados</li>
<li>Aplicar penalidades</li>
<li>Regulamentar pontos da LGPD</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
ANPD fiscaliza a LGPD.
</p>

</div>

<div class="card">

<h2>💰 Penalidades e Multas da LGPD</h2>

<p>
Empresas que descumprem a LGPD podem sofrer sanções.
</p>

<h3>📌 Penalidades possíveis</h3>

<ul>
<li>Advertência</li>
<li>Multa simples</li>
<li>Multa diária</li>
<li>Bloqueio dos dados</li>
<li>Eliminação dos dados</li>
<li>Publicização da infração</li>
</ul>

<h3>📌 Multa</h3>

<p>
Pode chegar a 2% do faturamento da empresa, limitada a 50 milhões de reais por infração.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Não é só multa. A empresa também pode ter dados bloqueados ou eliminados.
</p>

</div>

<div class="card">

<h2>🌐 Marco Civil da Internet</h2>

<p>
O Marco Civil da Internet estabelece princípios, direitos e deveres para o uso da internet no Brasil.
</p>

<h3>📌 Pontos principais</h3>

<ul>
<li>Privacidade</li>
<li>Liberdade de expressão</li>
<li>Neutralidade da rede</li>
<li>Responsabilidade de provedores</li>
<li>Guarda de registros</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Marco Civil da Internet não é a mesma coisa que LGPD.
</p>

</div>

<div class="card">

<h2>⚖️ Neutralidade da Rede</h2>

<p>
Neutralidade da rede significa que os dados na internet devem ser tratados de forma igualitária.
</p>

<p>
O provedor não deve favorecer, bloquear ou prejudicar determinados serviços, sites ou aplicações sem justificativa legal/técnica.
</p>

<h3>🧠 Exemplo</h3>

<p>
Uma operadora não deve reduzir propositalmente a velocidade de um serviço de streaming para favorecer outro.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
Neutralidade está ligada ao Marco Civil, não diretamente à ISO.
</p>

</div>

<div class="card">

<h2>🐧 Linux</h2>

<p>
Linux é um sistema do tipo Unix-like amplamente usado em servidores, segurança, cloud computing, containers e ambientes corporativos.
</p>

<p>
Tecnicamente, Linux é o kernel. O sistema completo costuma ser uma distribuição Linux.
</p>

<h3>📌 Onde aparece muito</h3>

<ul>
<li>Servidores web</li>
<li>Cloud computing</li>
<li>Docker</li>
<li>Android</li>
<li>Segurança ofensiva</li>
<li>Supercomputadores</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Linux puro é o kernel. Ubuntu, Debian, Kali e Red Hat são distribuições Linux.
</p>

</div>

<div class="card">

<h2>🧠 Kernel</h2>

<p>
Kernel é o núcleo do sistema operacional.
</p>

<p>
Ele faz a comunicação entre software e hardware, controlando os principais recursos da máquina.
</p>

<h3>📌 Responsabilidades</h3>

<ul>
<li>Gerenciar memória</li>
<li>Gerenciar processos</li>
<li>Controlar dispositivos</li>
<li>Controlar permissões</li>
<li>Gerenciar chamadas de sistema</li>
<li>Controlar acesso à CPU</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Docker compartilha o kernel do host. VM possui kernel próprio.
</p>

</div>

<div class="card">

<h2>💻 Shell</h2>

<p>
Shell é a interface que interpreta comandos enviados pelo usuário ao sistema operacional.
</p>

<p>
Ele permite controlar o sistema por comandos, scripts e automações.
</p>

<h3>📌 Funções</h3>

<ul>
<li>Executar comandos</li>
<li>Rodar scripts</li>
<li>Navegar no sistema de arquivos</li>
<li>Automatizar tarefas</li>
<li>Interagir com o kernel indiretamente</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Shell não é o kernel. Shell é a interface de comando.
</p>

</div>

<div class="card">

<h2>⌨️ Bash</h2>

<p>
Bash é um dos shells mais utilizados em sistemas Linux.
</p>

<p>
Ele permite executar comandos, criar scripts e automatizar tarefas administrativas.
</p>

<h3>📌 Exemplos de uso</h3>

<ul>
<li>Executar comandos no terminal</li>
<li>Criar scripts .sh</li>
<li>Automatizar backups</li>
<li>Gerenciar arquivos</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Bash é um tipo de shell, não uma distribuição Linux.
</p>

</div>

<div class="card">

<h2>📂 Sistema de Arquivos Linux</h2>

<p>
O Linux organiza seus arquivos em uma estrutura hierárquica em forma de árvore.
</p>

<p>
Tudo começa no diretório raiz, representado por <b>/</b>.
</p>

<h3>📌 Diretórios importantes</h3>

<ul>
<li><b>/home</b> → arquivos dos usuários</li>
<li><b>/etc</b> → arquivos de configuração</li>
<li><b>/bin</b> → comandos essenciais</li>
<li><b>/var</b> → logs e arquivos variáveis</li>
<li><b>/tmp</b> → arquivos temporários</li>
<li><b>/root</b> → diretório do administrador root</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
No Linux, o diretório raiz é /, não C:\ como no Windows.
</p>

</div>

<div class="card">

<h2>📜 Permissões Linux</h2>

<p>
Linux utiliza permissões para controlar quem pode ler, escrever ou executar arquivos.
</p>

<h3>📌 Tipos de permissão</h3>

<ul>
<li><b>r</b> → read/leitura</li>
<li><b>w</b> → write/escrita</li>
<li><b>x</b> → execute/execução</li>
</ul>

<h3>📌 Aplicadas para</h3>

<ul>
<li>Dono</li>
<li>Grupo</li>
<li>Outros</li>
</ul>

<h3>🧠 Exemplo</h3>

<p>
rwxr-xr-- significa permissões diferentes para dono, grupo e outros.
</p>

<h3>⚠️ Pegadinha</h3>

<p>
chmod 777 dá permissão total para todos. É perigoso em produção.
</p>

</div>

<div class="card">

<h2>📌 Comandos Linux Essenciais</h2>

<ul>
<li><b>ls</b> → lista arquivos</li>
<li><b>cd</b> → muda de diretório</li>
<li><b>pwd</b> → mostra o diretório atual</li>
<li><b>mkdir</b> → cria diretório</li>
<li><b>rm</b> → remove arquivos</li>
<li><b>cp</b> → copia arquivos</li>
<li><b>mv</b> → move ou renomeia arquivos</li>
<li><b>cat</b> → exibe conteúdo de arquivo</li>
<li><b>nano</b> → editor de texto</li>
<li><b>chmod</b> → altera permissões</li>
<li><b>sudo</b> → executa comando com privilégio administrativo</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
rm pode apagar arquivos permanentemente. Use com cuidado.
</p>

</div>

<div class="card">

<h2>📦 Distribuições Linux</h2>

<p>
Distribuição Linux é um sistema completo montado com kernel Linux, ferramentas, gerenciador de pacotes, interface e aplicativos.
</p>

<h3>📌 Exemplos</h3>

<ul>
<li><b>Ubuntu:</b> amigável e muito usado para estudos</li>
<li><b>Debian:</b> conhecido pela estabilidade</li>
<li><b>Kali Linux:</b> focado em segurança e pentest</li>
<li><b>Red Hat:</b> voltado ao ambiente corporativo</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
Kali Linux é distribuição Linux focada em segurança, não ferramenta única.
</p>

</div>

<div class="card">

<h2>🖥️ CLI e GUI</h2>

<p>
CLI significa Command Line Interface, ou seja, interface por linha de comando.
</p>

<p>
GUI significa Graphical User Interface, ou seja, interface gráfica com janelas, botões e menus.
</p>

<h3>🧠 Exemplos</h3>

<ul>
<li>Terminal Linux → CLI</li>
<li>Área de trabalho com ícones → GUI</li>
</ul>

<h3>⚠️ Pegadinha</h3>

<p>
CLI costuma ser mais usada em servidores por ser leve, rápida e fácil de automatizar.
</p>

</div>

<div class="card">

<h2>🔥 Cola Mental da Parte 3</h2>

<ul>
<li><b>LGPD</b> → proteção de dados pessoais</li>
<li><b>Dado pessoal</b> → identifica pessoa</li>
<li><b>Dado sensível</b> → exige proteção maior</li>
<li><b>Controlador</b> → decide</li>
<li><b>Operador</b> → executa</li>
<li><b>ANPD</b> → fiscaliza LGPD</li>
<li><b>Marco Civil</b> → direitos/deveres na internet</li>
<li><b>Neutralidade</b> → tráfego tratado igual</li>
<li><b>Linux</b> → kernel</li>
<li><b>Distribuição</b> → sistema completo</li>
<li><b>Shell</b> → interpreta comandos</li>
<li><b>Bash</b> → tipo de shell</li>
<li><b>/</b> → raiz do Linux</li>
<li><b>chmod 777</b> → permissão total</li>
</ul>

</div>
`
}

if(document.getElementById('conteudo')){
  document.getElementById('conteudo').innerHTML = conteudos[parte]
}

function irQuiz(){
  window.location.href = 'quiz.html'
}

async function carregarQuiz(){

  if(!document.getElementById('quiz')) return

  const resposta = await fetch('perguntas.json')
  const perguntas = await resposta.json()

  let banco = perguntas[`parte${parte}`]

  if(!Array.isArray(banco)){
    document.getElementById('quiz').innerHTML = `
      <div class="card">
        <h2>Erro</h2>
        <p>Essa parte não existe no JSON.</p>
      </div>
    `
    return
  }

  banco = banco.filter(q =>
    q &&
    q.pergunta &&
    Array.isArray(q.alternativas) &&
    q.alternativas.length >= 2 &&
    typeof q.correta === "number"
  )

  if(banco.length === 0){
    document.getElementById('quiz').innerHTML = `
      <div class="card">
        <h2>Erro</h2>
        <p>Não há perguntas válidas nessa parte.</p>
      </div>
    `
    return
  }

  let lista = []

  while(lista.length < 10){
    const embaralhadas = [...banco].sort(() => Math.random() - 0.5)

    for(const pergunta of embaralhadas){
      if(lista.length < 10){
        lista.push(pergunta)
      }
    }
  }

  lista = lista.slice(0, 10)

  const quiz = document.getElementById('quiz')
  quiz.innerHTML = ""

  lista.forEach((q,index)=>{

    const div = document.createElement('div')
    div.classList.add('pergunta')

    div.innerHTML = `
      <h3>${index+1}. ${q.pergunta}</h3>

      <div class="info-pergunta">
        <span class="tema">📚 ${q.tema || "geral"}</span>

        <span class="dificuldade ${q.dificuldade || "medio"}">
          ${pegarEmoji(q.dificuldade || "medio")}
          ${q.dificuldade || "medio"}
        </span>
      </div>

      <div class="alternativas">
        ${q.alternativas.map((alt,i)=>`
          <label class="alternativa" id="alt-${index}-${i}">
            <input type="radio" name="q${index}" value="${i}">
            ${alt}
          </label>
        `).join('')}
      </div>

      <div class="explicacao" id="exp${index}" style="display:none;">
        <strong>💡 Explicação:</strong>
        <p>${q.explicacao || "Sem explicação cadastrada."}</p>
      </div>
    `

    quiz.appendChild(div)
  })

  document.getElementById('finalizar').onclick = ()=>{

    let pontos = 0

    lista.forEach((q,index)=>{

      const marcada = document.querySelector(`input[name=q${index}]:checked`)
      const explicacao = document.getElementById(`exp${index}`)

      q.alternativas.forEach((_,i)=>{

        const alternativa = document.getElementById(`alt-${index}-${i}`)

        if(i === q.correta){
          alternativa.classList.add('correta')
        }

        if(marcada && Number(marcada.value) === i && i !== q.correta){
          alternativa.classList.add('errada')
        }

      })

      if(marcada && Number(marcada.value) === q.correta){
        pontos++
      }

      explicacao.style.display = 'block'
    })

    const porcentagem = Math.round((pontos / 10) * 100)

    document.getElementById('resultado').innerHTML = `
      <div class="card">
        <h2>🎯 Você acertou ${pontos} de 10</h2>

        <p>
          📊 Aproveitamento:
          <strong>${porcentagem}%</strong>
        </p>

        ${mensagemResultado(porcentagem)}
      </div>
    `

    document.getElementById('resultado').scrollIntoView({
      behavior:'smooth'
    })
  }
}

/* ===== DIFICULDADE ===== */

function pegarEmoji(dificuldade){

  if(dificuldade === 'facil'){
    return '🟢'
  }

  if(dificuldade === 'medio'){
    return '🟡'
  }

  return '🔴'

}

/* ===== RESULTADO ===== */

function mensagemResultado(valor){

  if(valor >= 90){

    return `
      <p class="excelente">
        🔥 Excelente desempenho!
      </p>
    `

  }

  if(valor >= 70){

    return `
      <p class="bom">
        ✅ Bom resultado!
      </p>
    `

  }

  if(valor >= 50){

    return `
      <p class="medio">
        ⚠️ Precisa revisar alguns tópicos.
      </p>
    `

  }

  return `
    <p class="ruim">
      ❌ Recomenda-se estudar mais.
    </p>
  `

}

carregarQuiz()