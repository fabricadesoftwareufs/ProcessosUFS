Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Aproveitamento de Estudos (AE)","publishDate":"29/02/2020 13:37:30","pages":[{"id":"125e832a-3d17-423e-bb57-0111de79cfe2","name":"Analise de Processos para Execução de Aproveitamento de Estudos (AE)","version":"1.0","author":"Emeson","image":"files\\diagrams\\Analise_de_Processos_para_Execucao_de_Aproveitamento_de_Estudos_AE.png","isSubprocessPage":false,"elements":[{"id":"d7220e4f-3f43-4527-ae42-fc518daa5a07","name":"Aproveitamento de Estudos (AE)","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1391.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"3abe40a5-f295-4084-8e0f-52ab30c29f62","name":"Calendário acadêmico","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":411.0,"y":47.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"Estado","type":"text"}]},{"id":"e9d7452c-cdda-4aba-b6c0-73e78aa169ef","name":"Inicio","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":124.0,"y":85.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f385f1ff-2a86-4a48-9114-9d9e4ccfe905","name":"Solicitar aproveitamento de estudos (AE)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":188.0,"y":207.0}],"radius":0.0,"height":83.0,"width":160.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9bdb3234-523b-477e-a547-0ea90fbe3167","name":"Informar sobre documentação para composição do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":170.0,"y":342.0}],"radius":0.0,"height":111.0,"width":196.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56686d61-f50e-4095-835a-78365bab5b1e","name":"Abrir o processo de aproveitamentode estudos de estudo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":429.5,"y":488.0}],"radius":0.0,"height":76.0,"width":182.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"31764613-dfef-4b4e-8898-878b64b902ec","name":"Abrir o período  para solicitações de  aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":180.500061,"y":36.5}],"radius":0.0,"height":127.0,"width":175.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4a0edfc9-2d6b-48f2-a2de-4253fab036a1","name":"Emitir um relatório conclusivo para o departamento  do curso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1597.99988,"y":1285.60034}],"radius":0.0,"height":92.0,"width":186.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b27b39fe-d7f3-4f9c-80a3-c6f1afb1f82f","name":"Incluir o resultado no histórico do aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1607.49988,"y":762.3}],"radius":0.0,"height":85.0,"width":167.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"400d0cd9-1865-4040-84bd-b3dcf12fb979","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1675.99988,"y":677.3}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"a4849be5-52c6-438c-ab9d-97be95d17827","name":"Verificar se o dicente atende os requisitos  para o aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":428.0,"y":687.1}],"radius":0.0,"height":115.0,"width":185.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1aad8497-5928-4fef-bb50-ec9d11af3820","name":"Verificar se  a disciplina está sendo ofertada  ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":679.0,"y":698.6}],"radius":0.0,"height":92.0,"width":149.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8db68216-8841-4f3a-8404-5587feea26a8","name":"Receber o processo de aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1082.0,"y":904.0}],"radius":0.0,"height":101.0,"width":171.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6aa1890c-fe72-40f5-b219-8fcd7c4e4724","name":"Submenter o discente à avaliação  de aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1327.0,"y":1285.10034}],"radius":0.0,"height":93.0,"width":216.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b50406f-b8ac-469c-ab07-ce09a0274945","name":"Notificar o discente para manifestar interesse em ser avaliado por um banca examinadora","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1010.0,"y":599.3}],"radius":0.0,"height":112.0,"width":244.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d1759bdb-5916-4742-9026-6682bcf02c1c","name":"Está sendo ofertada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":895.0,"y":724.6}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"51e99675-7d49-4c2c-83a2-660f69ba591b","name":"Manifestar interesse para ser avaliado pela banca examinadora ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1038.5,"y":204.0}],"radius":0.0,"height":102.0,"width":187.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54a27b46-77e3-4444-9fee-07a265b224f8","name":"Emitir um parecer da manifestação do aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1348.50012,"y":600.3}],"radius":0.0,"height":116.0,"width":171.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6af2723f-b174-4338-bbcf-e925e9a9d060","name":"Receber o processo de aproveitamento e forma a banca examinadora ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1344.00012,"y":899.3}],"radius":0.0,"height":102.0,"width":180.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c5c8b12e-ccdf-4dfb-a0a2-fc92199f33ea","name":"  Informar ao professor da disciplina a existência de aluno que  irá fazer o aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1041.0,"y":1028.0}],"radius":0.0,"height":93.0,"width":253.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d8dd945-e0fd-455d-916a-cabbede8a36d","name":"Dar ciência sobre a solicitação do aproveitamento de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1041.5,"y":1169.0}],"radius":0.0,"height":74.0,"width":252.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b5c0a6b0-83fe-4d54-9f1a-586050ee2fd0","name":"DAA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":169.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ef081c37-c4c1-45d0-881b-e2a4f498ee21","name":"Discente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":189.7}],"radius":0.0,"height":130.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"69fd035d-ef0f-41aa-b6c2-025573f3ac7a","name":"SEAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":319.7}],"radius":0.0,"height":149.1,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"55a896e1-e415-490d-874c-1565ed5a9eb5","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":468.800018}],"radius":0.0,"height":112.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5c18ace9-82aa-4ba0-a0e2-5297b4fba1de","name":"DICAC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":581.300049}],"radius":0.0,"height":307.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6e2c61ef-821c-4aea-afcc-36b300a025f5","name":"Departamento","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":888.500061}],"radius":0.0,"height":261.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6e6a16f3-466d-4805-8da8-d9b03f1e5b34","name":"Pofessor","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1149.70007}],"radius":0.0,"height":118.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4c18a107-3a4c-407d-951b-9306de544e6c","name":"Banca Avaliadora","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1268.00012}],"radius":0.0,"height":142.999878,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"125e832a-3d17-423e-bb57-0111de79cfe2","containerName":"Analise de Processos para Execução de Aproveitamento de Estudos (AE)","isSubprocess":false,"elements":[{"id":"fe14000b-1e1f-4f84-a4b7-c117a313646c"},{"id":"d7220e4f-3f43-4527-ae42-fc518daa5a07","value":"Aproveitamento de Estudos (AE)"},{"id":"b5c0a6b0-83fe-4d54-9f1a-586050ee2fd0","value":"DAA"},{"id":"ef081c37-c4c1-45d0-881b-e2a4f498ee21","value":"Discente"},{"id":"69fd035d-ef0f-41aa-b6c2-025573f3ac7a","value":"SEAP"},{"id":"55a896e1-e415-490d-874c-1565ed5a9eb5","value":"SECON"},{"id":"5c18ace9-82aa-4ba0-a0e2-5297b4fba1de","value":"DICAC"},{"id":"6e2c61ef-821c-4aea-afcc-36b300a025f5","value":"Departamento"},{"id":"6e6a16f3-466d-4805-8da8-d9b03f1e5b34","value":"Pofessor"},{"id":"4c18a107-3a4c-407d-951b-9306de544e6c","value":"Banca Avaliadora"},{"id":"3abe40a5-f295-4084-8e0f-52ab30c29f62","value":"Calendário acadêmico"},{"id":"e9d7452c-cdda-4aba-b6c0-73e78aa169ef","value":"Inicio"},{"id":"f385f1ff-2a86-4a48-9114-9d9e4ccfe905","value":"Solicitar aproveitamento de estudos (AE)"},{"id":"9bdb3234-523b-477e-a547-0ea90fbe3167","value":"Informar sobre documentação para composição do processo"},{"id":"56686d61-f50e-4095-835a-78365bab5b1e","value":"Abrir o processo de aproveitamentode estudos de estudo"},{"id":"31764613-dfef-4b4e-8898-878b64b902ec","value":"Abrir o período  para solicitações de  aproveitamento de estudos"},{"id":"4a0edfc9-2d6b-48f2-a2de-4253fab036a1","value":"Emitir um relatório conclusivo para o departamento  do curso"},{"id":"b27b39fe-d7f3-4f9c-80a3-c6f1afb1f82f","value":"Incluir o resultado no histórico do aluno"},{"id":"400d0cd9-1865-4040-84bd-b3dcf12fb979","value":"Fim"},{"id":"a4849be5-52c6-438c-ab9d-97be95d17827","value":"Verificar se o dicente atende os requisitos  para o aproveitamento de estudos"},{"id":"1aad8497-5928-4fef-bb50-ec9d11af3820","value":"Verificar se  a disciplina está sendo ofertada  "},{"id":"8db68216-8841-4f3a-8404-5587feea26a8","value":"Receber o processo de aproveitamento de estudos"},{"id":"6aa1890c-fe72-40f5-b219-8fcd7c4e4724","value":"Submenter o discente à avaliação  de aproveitamento de estudos"},{"id":"1b50406f-b8ac-469c-ab07-ce09a0274945","value":"Notificar o discente para manifestar interesse em ser avaliado por um banca examinadora"},{"id":"d1759bdb-5916-4742-9026-6682bcf02c1c","value":"Está sendo ofertada?"},{"id":"51e99675-7d49-4c2c-83a2-660f69ba591b","value":"Manifestar interesse para ser avaliado pela banca examinadora "},{"id":"54a27b46-77e3-4444-9fee-07a265b224f8","value":"Emitir um parecer da manifestação do aproveitamento de estudos"},{"id":"6af2723f-b174-4338-bbcf-e925e9a9d060","value":"Receber o processo de aproveitamento e forma a banca examinadora "},{"id":"c5c8b12e-ccdf-4dfb-a0a2-fc92199f33ea","value":"  Informar ao professor da disciplina a existência de aluno que  irá fazer o aproveitamento de estudos"},{"id":"8d8dd945-e0fd-455d-916a-cabbede8a36d","value":"Dar ciência sobre a solicitação do aproveitamento de estudos"},{"id":"2237ed6e-0c92-4dd0-b297-00353d194c84"}]}]}