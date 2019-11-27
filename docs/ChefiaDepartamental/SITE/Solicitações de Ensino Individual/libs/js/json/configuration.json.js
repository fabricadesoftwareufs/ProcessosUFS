Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Solicitações de Ensino Individual","publishDate":"27/11/2019 10:57:49","pages":[{"id":"ad95b41f-a1d8-4848-a996-b89898f24810","name":"Solicitações de Ensino Individual","version":"1.0","author":"paulo vitor","image":"files\\diagrams\\Solicitacoes_de_Ensino_Individual.png","isSubprocessPage":false,"elements":[{"id":"4ea0d9ab-56be-4732-8287-cd24fdadbc9f","name":"Solicitações de Ensino individual","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1097.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"52a58215-c11d-45dd-a258-0baad7cd44bc","name":"Inicio ","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":138.0,"y":89.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"1af24c37-0db8-428d-a522-be679478769b","name":"Abrir o período para solicitação de turma individual ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":242.5,"y":66.5}],"radius":0.0,"height":75.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e8cbd01-a2e4-42a8-83c5-90a5c70241b1","name":"Solicitar ensino individual ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":252.0,"y":284.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b3920db-6cbb-4773-8801-45306143356f","name":"Entrar com usuario e senha do aluno","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":245.000031,"y":438.5}],"radius":0.0,"height":85.0,"width":104.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"6db31b4b-244d-4d07-83fe-b63a9bfeacc9","name":"Ir Menu Ensino","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":439.0,"y":448.5}],"radius":0.0,"height":65.0,"width":95.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"6c5f97f5-87cf-4d0e-9257-9e9d977f7c40","name":"Solicitar ensino endividual","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":628.0,"y":443.0}],"radius":0.0,"height":76.0,"width":104.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"25a674f3-5cad-4396-b08b-6c237627ebe1","name":"Solicitar ","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":796.0,"y":448.0}],"radius":0.0,"height":66.0,"width":98.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"9784c66e-7674-48b6-b6a7-f8e00a4d18ac","name":"Encaminhar a solicitação  ao departamento  ofertante da disciplina","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":779.0,"y":663.0}],"radius":0.0,"height":86.0,"width":132.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c20680ab-65f3-4ec1-bb1b-6ec9b03dc482","name":"Analisar  a solicitação verificando se o aluno atende os pré-requisitos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":784.0,"y":895.5}],"radius":0.0,"height":79.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6279ec61-26ce-4339-bcbe-74f5d67dc950","name":"O aluno atende os requisitos para ensino individual?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1042.0,"y":915.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"084df746-d48a-4c96-b1e0-f251876ea7a3","name":"Matricular Discente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1200.0,"y":905.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d85280f6-36e3-4225-bf6a-642a3a401fe5","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1386.0,"y":920.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"95e56a41-077f-408c-808b-91062d5f0870","name":"Fim","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1047.0,"y":1017.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd","properties":[]},{"id":"7f240d28-00db-4e5a-aa31-78a0fa515f0d","name":"DAA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"71ddc57b-fae6-4586-9856-f5e96a6b7563","name":"Aluno","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":220.0}],"radius":0.0,"height":169.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3cf84b97-d923-4cd3-bfe4-719d8c62ed45","name":"SIGAA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":389.0}],"radius":0.0,"height":248.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c106b453-eb0c-4961-94bc-3ca785227972","name":"Colegiado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":637.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"82d303d4-ec92-4c70-8804-f9c8c41919df","name":"Departamento","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":837.0}],"radius":0.0,"height":280.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"ad95b41f-a1d8-4848-a996-b89898f24810","containerName":"Solicitações de Ensino Individual","isSubprocess":false,"elements":[{"id":"4ea0d9ab-56be-4732-8287-cd24fdadbc9f","value":"Solicitações de Ensino individual"},{"id":"7f240d28-00db-4e5a-aa31-78a0fa515f0d","value":"DAA"},{"id":"71ddc57b-fae6-4586-9856-f5e96a6b7563","value":"Aluno"},{"id":"3cf84b97-d923-4cd3-bfe4-719d8c62ed45","value":"SIGAA"},{"id":"c106b453-eb0c-4961-94bc-3ca785227972","value":"Colegiado"},{"id":"82d303d4-ec92-4c70-8804-f9c8c41919df","value":"Departamento"},{"id":"6279ec61-26ce-4339-bcbe-74f5d67dc950","value":"O aluno atende os requisitos para ensino individual?"},{"id":"084df746-d48a-4c96-b1e0-f251876ea7a3","value":"Matricular Discente"},{"id":"6db31b4b-244d-4d07-83fe-b63a9bfeacc9","value":"Ir Menu Ensino"},{"id":"52a58215-c11d-45dd-a258-0baad7cd44bc","value":"Inicio "},{"id":"8e8cbd01-a2e4-42a8-83c5-90a5c70241b1","value":"Solicitar ensino individual "},{"id":"8b3920db-6cbb-4773-8801-45306143356f","value":"Entrar com usuario e senha do aluno"},{"id":"6c5f97f5-87cf-4d0e-9257-9e9d977f7c40","value":"Solicitar ensino endividual"},{"id":"25a674f3-5cad-4396-b08b-6c237627ebe1","value":"Solicitar "},{"id":"1af24c37-0db8-428d-a522-be679478769b","value":"Abrir o período para solicitação de turma individual "},{"id":"9784c66e-7674-48b6-b6a7-f8e00a4d18ac","value":"Encaminhar a solicitação  ao departamento  ofertante da disciplina"},{"id":"c20680ab-65f3-4ec1-bb1b-6ec9b03dc482","value":"Analisar  a solicitação verificando se o aluno atende os pré-requisitos"},{"id":"d85280f6-36e3-4225-bf6a-642a3a401fe5","value":"Fim"},{"id":"95e56a41-077f-408c-808b-91062d5f0870","value":"Fim"}]}]}