A primeira div só poderá aparecer se nossa tela possuir largura mínima de 500px.

A segunda div só poderá aparecer se a largura estiver entre 600px e 1000px.

A terceira div não deverá aparecer se nossa tela possuir largura entre 650px e 950px.

Sem alterar a classe trick, faça com que o texto dela apareça somente quando a tela estiver com menos de 500px de largura.

>>index.html && style.css

Faça o tamanho da fonte ser maior;

Faça o tamanho da fonte dos elementos h1 ser menor;

Aumente o espaçamento entre as figuras;

Adicione um pouco de margin na página.

Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.

Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);

Ajuste o tamanho da fonte;

Ajuste as margens da página;

Faça as imagens serem mostradas em duas colunas.

Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):

Altere a cor de fundo;

Ajuste o tamanho da fonte;

Ajuste as margens da página;

Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

>>small-screen.html && small-screen.css

Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande). Faça pelo menos um commit para cada layout;

Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:

Onde a lista de capítulos deve estar posicionada?

Como a história deve ser mostrada?

Como o cabeçalho deve ser posicionado?

O que fazer com as informações do autor em cada tamanho de tela?

Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

>>alice.html && alice.css