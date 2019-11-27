Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Aproveitamento Especial de Estudos (AEE)","publishDate":"27/11/2019 10:45:17","pages":[{"id":"125e832a-3d17-423e-bb57-0111de79cfe2","name":"Processo de  Aproveitamento Especial de Estudos (AEE)","version":"1.0","author":"Emeson","image":"files\\diagrams\\Processo_de__Aproveitamento_Especial_de_Estudos_AEE.png","isSubprocessPage":false,"elements":[{"id":"d7220e4f-3f43-4527-ae42-fc518daa5a07","name":"Processo de\n Aproveitamento Especialde Estudos (AEE)","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1188.99976,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"e9d7452c-cdda-4aba-b6c0-73e78aa169ef","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":122.0,"y":78.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5140a120-ac12-45e5-a2d2-828e4487ddb5","name":"Abrir o período  para solicitações de  aproveitamento  especial de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":200.0,"y":47.0}],"radius":0.0,"height":92.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f385f1ff-2a86-4a48-9114-9d9e4ccfe905","name":"Solicitar Aproveitamento Especial de Estudos (AEE)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":213.0,"y":222.0}],"radius":0.0,"height":72.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"700d2deb-8ae6-4d58-af50-f928338c5f7e","name":"O discente  atende os pre-requisitos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":244.0,"y":406.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ba57b8b1-8c9e-4a0c-83d6-e49375312a78","name":"Abrir  processo para aproveitamento especial de estudos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":204.0,"y":527.0}],"radius":0.0,"height":86.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a8163bc1-293b-420e-8b01-7e1a551eac00","name":"Verificar se  o discente atende  pe-requisitos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":205.0,"y":691.0}],"radius":0.0,"height":74.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fb591a23-4eb8-4b19-8bdb-dfb80334e690","name":"Formar banca avaliadora","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":851.0}],"radius":0.0,"height":79.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2c32a35-ff1c-434b-9eb8-6c43d189ad4a","name":"Submenter  avaliação para o discente. ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":195.0,"y":1065.5}],"radius":0.0,"height":80.0,"width":137.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7a2d8f7-df18-4e64-84b1-d8cea053bb67","name":" Emitir relatorio conclusivo da prova aplicada.","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":430.5,"y":1069.0}],"radius":0.0,"height":73.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6bc7b649-8dc4-4257-a06c-83d3b10a0ce6","name":"Ter ciência da conclusão da prova aplicada ao aluno de AEE.","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":430.0,"y":858.0}],"radius":0.0,"height":70.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba35f286-3df1-4b9f-a7bf-5dbe3dae871a","name":"Incluir o resultado da avaliação do AEE no histórico do aluno.","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.5,"y":693.5}],"radius":0.0,"height":72.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"83f2db26-2773-43f6-b2bb-94d589b303da","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":626.0,"y":714.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"70226b0c-0dee-457e-bc99-ac236110ab6a","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":343.0,"y":411.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"61fa1f97-9267-444e-af1a-dcb147c0df2b","name":"Calendário acadêmico","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":395.0,"y":26.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"Estado","value":"","type":"text"}]},{"id":"addd9075-bd68-48a4-bfc6-fd6ff8379f02","name":"DAA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":161.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ef081c37-c4c1-45d0-881b-e2a4f498ee21","name":"Discente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":181.3}],"radius":0.0,"height":175.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"69fd035d-ef0f-41aa-b6c2-025573f3ac7a","name":"SEAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":356.3}],"radius":0.0,"height":146.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"55a896e1-e415-490d-874c-1565ed5a9eb5","name":"SECOM","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":503.199982}],"radius":0.0,"height":146.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5c18ace9-82aa-4ba0-a0e2-5297b4fba1de","name":"DICAC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":649.699951}],"radius":0.0,"height":159.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6e2c61ef-821c-4aea-afcc-36b300a025f5","name":"Departamento","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":809.499939}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"dfc61933-b509-4126-a6c7-aa9738823f7e","name":"Banca avaliadora","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1009.49994}],"radius":0.0,"height":199.499878,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"125e832a-3d17-423e-bb57-0111de79cfe2","containerName":"Processo de  Aproveitamento Especial de Estudos (AEE)","isSubprocess":false,"elements":[{"id":"d7220e4f-3f43-4527-ae42-fc518daa5a07","value":"Processo de\n Aproveitamento Especialde Estudos (AEE)"},{"id":"addd9075-bd68-48a4-bfc6-fd6ff8379f02","value":"DAA"},{"id":"ef081c37-c4c1-45d0-881b-e2a4f498ee21","value":"Discente"},{"id":"69fd035d-ef0f-41aa-b6c2-025573f3ac7a","value":"SEAP"},{"id":"55a896e1-e415-490d-874c-1565ed5a9eb5","value":"SECOM"},{"id":"5c18ace9-82aa-4ba0-a0e2-5297b4fba1de","value":"DICAC"},{"id":"6e2c61ef-821c-4aea-afcc-36b300a025f5","value":"Departamento"},{"id":"dfc61933-b509-4126-a6c7-aa9738823f7e","value":"Banca avaliadora"},{"id":"61fa1f97-9267-444e-af1a-dcb147c0df2b","value":"Calendário acadêmico"},{"id":"e9d7452c-cdda-4aba-b6c0-73e78aa169ef","value":"Início"},{"id":"f385f1ff-2a86-4a48-9114-9d9e4ccfe905","value":"Solicitar Aproveitamento Especial de Estudos (AEE)"},{"id":"ba57b8b1-8c9e-4a0c-83d6-e49375312a78","value":"Abrir  processo para aproveitamento especial de estudos"},{"id":"a8163bc1-293b-420e-8b01-7e1a551eac00","value":"Verificar se  o discente atende  pe-requisitos"},{"id":"fb591a23-4eb8-4b19-8bdb-dfb80334e690","value":"Formar banca avaliadora"},{"id":"b2c32a35-ff1c-434b-9eb8-6c43d189ad4a","value":"Submenter  avaliação para o discente. "},{"id":"6bc7b649-8dc4-4257-a06c-83d3b10a0ce6","value":"Ter ciência da conclusão da prova aplicada ao aluno de AEE."},{"id":"ba35f286-3df1-4b9f-a7bf-5dbe3dae871a","value":"Incluir o resultado da avaliação do AEE no histórico do aluno."},{"id":"83f2db26-2773-43f6-b2bb-94d589b303da","value":"Fim"},{"id":"5140a120-ac12-45e5-a2d2-828e4487ddb5","value":"Abrir o período  para solicitações de  aproveitamento  especial de estudos"},{"id":"c7a2d8f7-df18-4e64-84b1-d8cea053bb67","value":" Emitir relatorio conclusivo da prova aplicada."},{"id":"700d2deb-8ae6-4d58-af50-f928338c5f7e","value":"O discente  atende os pre-requisitos?"},{"id":"70226b0c-0dee-457e-bc99-ac236110ab6a","value":"Fim"},{"id":"ce34dabc-2edd-4c15-8669-3e58eef2d4e6"}]}]}