Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Reuniões do Núcleo Docente Estruturante","publishDate":"27/11/2019 10:42:33","pages":[{"id":"199e5b99-624c-4eb8-8745-f039aab68ddf","name":"Reuniões do Núcleo Docente Estruturante","version":"1.0","author":"Emeson","image":"files\\diagrams\\Reunioes_do_Nucleo_Docente_Estruturante.png","isSubprocessPage":false,"elements":[{"id":"e21455d8-281a-48b2-b2ef-8de0ebacf61e","name":"Reuniões do Núcleo Docente Estruturante","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":488.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"7d13eaac-a269-4247-93b5-1a960fe8638c","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":137.0,"y":121.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"1e101d0d-ddb3-4929-81fb-5cc55c0192d6","name":"Existe demanda para reunião?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":229.0,"y":116.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"23eb4772-32b0-4044-8214-30ea91e7e634","name":"Abrir chamado para elaboração da pauta para a reunião do colegiado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":370.0,"y":95.5}],"radius":0.0,"height":81.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f82e9f94-cf41-4056-9816-e51c6a671673","name":"Enviar as sugestões de pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":603.0,"y":392.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"66b2169d-c169-4433-9539-37f07086c43c","name":"Confirmar o recebimento das sugestões de pauta ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":598.0,"y":125.0}],"radius":0.0,"height":73.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"18932bdd-0093-4bfd-b396-24ef9d9d24b9","name":"Enviar convocatória  para a reunião do colegiado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":740.0,"y":123.5}],"radius":0.0,"height":76.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a6550fd7-6b6a-4e38-be27-126a1d202aa9","name":"Confirmar a presença para a reunião do colegiado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":921.0,"y":377.0}],"radius":0.0,"height":68.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23c2e6f7-0d55-4270-b088-a1bf76294fba","name":"Colocar em votação cada pauta sugerida pelos membros ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":915.0,"y":118.5}],"radius":0.0,"height":77.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"29276a3f-9047-4bdc-b6ac-c40256e6d04c","name":"Aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1051.0,"y":137.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"91566c2a-6484-46b9-878e-369b1d144895","name":"Homologar a pauta Votada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1150.0,"y":76.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"965e83cb-7ec4-4510-b0bc-b1d2cc463e3e","name":"Tem pauta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1278.0,"y":86.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"8cdd344c-5531-436c-8ec4-e2aceec0d821","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1398.0,"y":91.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"0065259c-3f3a-4554-ac27-78b32d28d424","name":"Dispensar Pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1160.0,"y":171.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"db765884-19c5-44a3-96db-b2a87bd6b8a5","name":"Tem pauta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1284.0,"y":181.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"f775620d-b9c6-4334-a08f-88b425e1e2cd","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1404.0,"y":186.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"33123f2a-7037-4e3d-98cb-4510278333ff","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":234.0,"y":39.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"214e2d85-f2f1-48a4-88c5-ac72346a938f","name":"Pauta de reunião","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":860.0,"y":34.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"Estado","type":"text"}]},{"id":"477d728c-3ab3-493d-9e84-c8c2e00d047d","name":"Colegiado do Curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":288.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e00d6136-37ef-42a4-a71b-9a3f678dd417","name":"Menbros do Colegiado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":308.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"199e5b99-624c-4eb8-8745-f039aab68ddf","containerName":"Reuniões do Núcleo Docente Estruturante","isSubprocess":false,"elements":[{"id":"e21455d8-281a-48b2-b2ef-8de0ebacf61e","value":"Reuniões do Núcleo Docente Estruturante"},{"id":"477d728c-3ab3-493d-9e84-c8c2e00d047d","value":"Colegiado do Curso"},{"id":"e00d6136-37ef-42a4-a71b-9a3f678dd417","value":"Menbros do Colegiado"},{"id":"214e2d85-f2f1-48a4-88c5-ac72346a938f","value":"Pauta de reunião"},{"id":"23eb4772-32b0-4044-8214-30ea91e7e634","value":"Abrir chamado para elaboração da pauta para a reunião do colegiado"},{"id":"f82e9f94-cf41-4056-9816-e51c6a671673","value":"Enviar as sugestões de pauta"},{"id":"66b2169d-c169-4433-9539-37f07086c43c","value":"Confirmar o recebimento das sugestões de pauta "},{"id":"18932bdd-0093-4bfd-b396-24ef9d9d24b9","value":"Enviar convocatória  para a reunião do colegiado"},{"id":"a6550fd7-6b6a-4e38-be27-126a1d202aa9","value":"Confirmar a presença para a reunião do colegiado"},{"id":"23c2e6f7-0d55-4270-b088-a1bf76294fba","value":"Colocar em votação cada pauta sugerida pelos membros "},{"id":"29276a3f-9047-4bdc-b6ac-c40256e6d04c","value":"Aprovada?"},{"id":"91566c2a-6484-46b9-878e-369b1d144895","value":"Homologar a pauta Votada"},{"id":"0065259c-3f3a-4554-ac27-78b32d28d424","value":"Dispensar Pauta"},{"id":"965e83cb-7ec4-4510-b0bc-b1d2cc463e3e","value":"Tem pauta?"},{"id":"8cdd344c-5531-436c-8ec4-e2aceec0d821","value":"Fim"},{"id":"db765884-19c5-44a3-96db-b2a87bd6b8a5","value":"Tem pauta?"},{"id":"f775620d-b9c6-4334-a08f-88b425e1e2cd","value":"Fim"},{"id":"7d13eaac-a269-4247-93b5-1a960fe8638c","value":"Início"},{"id":"1e101d0d-ddb3-4929-81fb-5cc55c0192d6","value":"Existe demanda para reunião?"},{"id":"33123f2a-7037-4e3d-98cb-4510278333ff","value":"Fim"},{"id":"0947cec6-8524-4325-b768-587b8f80de02"}]}]}