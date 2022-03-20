interface Class{
  id: number;
  title: string;
  number: number;
  duration: number;
}

interface CompleteCourse{
  id: number;
  name: number;
  slug: string;
}

interface CompleteClass extends Class{
  url: string;
  description: string;
  nextClassId: number | null;
  previousClassId: number | null;
}

export function getClassesFromCourse(course: string | string[]): [Class[],CompleteCourse] | null[]{
  let classes = null;
  switch(course){
    case 'math': classes = [
      { id: 1, title: 'Introdução à teoria matemática', number: 1, duration: 5},
      { id: 2, title: 'Introdução à teoria matemática II', number: 2, duration: 6},
      { id: 3, title: 'Compreendendo números', number: 3, duration: 6},
      { id: 4, title: 'Compreendendo operações básicas', number: 4, duration: 8},
    ]
      break;
    case 'phisics': classes = [
      { id: 5, title: 'Introdução à teoria física', number: 5, duration: 5},
      { id: 6, title: 'Introdução à teoria física II', number: 6, duration: 6},
      { id: 7, title: 'Compreendendo grandezas', number: 7, duration: 6},
      { id: 8, title: 'Grandezas escalares', number: 8, duration: 8},
      { id: 9, title: 'Grandezas vetoriais', number: 9, duration: 5},
    ]
      break;
    case 'english': classes = [
      { id: 10, title: 'Introdução à ao dialeto inglês', number: 10, duration: 5},
      { id: 11, title: 'Aprendendo classes gramaticais', number: 11, duration: 6},
      { id: 12, title: 'Desvendando tempo verbais', number: 12, duration: 6},
    ]
      break;
    case 'chemistry': classes = [
      { id: 13, title: 'Introdução à teoria química', number: 13, duration: 5},
      { id: 14, title: 'A tabela periódica', number: 14, duration: 6},
      { id: 15, title: 'Reações químicas', number: 15, duration: 6},
      { id: 16, title: 'Bases, sais e ácidos não orgânicos', number: 16, duration: 8},
    ]
      break;
    case 'talk': classes = [
      { id: 17, title: 'Introdução à táticas de comunicação', number: 17, duration: 5},
      { id: 18, title: 'Como captar a atenção do público?', number: 18, duration: 6},
      { id: 19, title: 'Se expressando melhor', number: 19, duration: 6},
      { id: 20, title: 'Como lidar com questionamentos', number: 20, duration: 8},
    ]
      break;
    case 'writing': classes = [
      { id: 21, title: 'Introdução à teoria de redação', number: 21, duration: 5},
      { id: 22, title: 'Compreendendo os tipos de texto', number: 22, duration: 6},
      { id: 23, title: 'Como desenvolver uma sinópse', number: 23, duration: 6},
    ]
      break;
    default: break;
  }

  let completeCourse = null;
  switch(course){
    case 'math':
      completeCourse = { id:1, name:'Matemática', slug: 'math'};
      break;
    case 'phisics':
      completeCourse = { id:2, name:'Física', slug: 'phisics'};
      break;
    case 'english':
      completeCourse = { id:3, name:'Inglês', slug: 'english'};
      break;
    case 'chemistry':
      completeCourse = { id:4, name:'Química', slug: 'chemistry'};
      break;
    case 'talk':
      completeCourse = { id:5, name:'Diálogo em público', slug: 'talk'};
      break;
    case 'writing':
      completeCourse = { id:6, name:'Redação', slug: 'writing'};
      break;
  }

  return [classes, completeCourse];
}

export function getCompleteClass(course: string | string[], classId: number): [CompleteClass | null, number]{
  let newClassId = classId;
  let redirectClassId = null;

  if(classId === 1 && course !== 'math'){
    switch(course){
      case 'phisics': newClassId = 5; break;
      case 'english': newClassId = 10; break;
      case 'chemistry': newClassId = 13; break;
      case 'talk': newClassId = 17; break;
      case 'writing': newClassId = 21; break;
      default: break;
    }
    redirectClassId = newClassId;
  }

  let completeClass = null;
  switch(newClassId){
    case 1: completeClass = {
      id: 1, 
      title: 'Introdução à teoria matemática', 
      number: 1, 
      duration: 5,
      url: 'https://youtube.com/embed/UwLFO1Di3Bg',
      description:"<p>Nesta aula será abordado os conceitos mais básicos da matemática.</p><p>Se trata de uma abordagem inicial, para criar uma base sólida na aprendizagem.</p>",
      previousClassId: null,
      nextClassId: 2,
    }
      break;
    case 2: completeClass = {
      id: 2, 
      title: 'Introdução à teoria matemática II', 
      number: 2, 
      duration: 5,
      url: 'https://www.youtube.com/embed/X_AHrosOZIc',
      description:"<p>Nesta aula continuaremos os conceitos abordados na aula anterior.</p>",
      previousClassId: 1,
      nextClassId: 3,
    }
      break;

    case 3: completeClass =  {
       id: 3,
       title: 'Compreendendo números', 
       number: 3, 
       duration: 6,
       url: 'https://www.youtube.com/embed/vpBUH8TJJFw',
       description: "<p>Vamos entender o poder dos números, e o que podemos fazer com eles</p><p>Trata-se de uma abordagem inicial, mas importante.</p>",
       previousClassId: 2,
       nextClassId: 4,
    }
      break;
    case 4: completeClass =  {
       id: 4,
       title: 'Compreendendo operações básicas', 
       number: 4, 
       duration: 8,
       url: 'https://www.youtube.com/embed/0nOX7tfUSJU',
       description: "<p>Nesta aula veremos as 4 operações básicas da matemática.</p>",
       previousClassId: 3,
       nextClassId: null,
    }
      break;
    case 5: completeClass =  {
       id: 5,
       title: 'Introdução à teoria física', 
       number: 5, 
       duration: 5,
       url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
       description: "<p>Vamos entender os conceitos iniciais da física.</p><p>Veremos quando e por que ela surgiu, bem como para onde estamos indo.</p>",
       previousClassId: null,
       nextClassId: 6,
    }
      break;
    case 6: completeClass =  {
       id: 6,
       title: 'Introdução à teoria física II', 
       number: 5, 
       duration: 5,
       url: 'https://www.youtube.com/embed/YMRyCEeKgnw',
       description: "<p>Nesta aula continuaremos a abordagem da aula anterior.</p>",
       previousClassId: 5,
       nextClassId: 7,
    }
      break;
    case 7: completeClass =  {
       id: 7,
       title: 'Compreendendo grandezas', 
       number: 7, 
       duration: 6,
       url: 'https://www.youtube.com/embed/UwLFO1Di3Bg',
       description: "<p>Entraremos na parte de grandezas físicas.</p><p>Trata-se de um conteúdo que presenciamos cotidianamente.</p>",
       previousClassId: 6,
       nextClassId: 8,
    }
      break;
    case 8: completeClass =  {
       id: 8,
       title: 'Grandezas escalares', 
       number: 8, 
       duration: 8,
       url: 'https://www.youtube.com/embed/UwLFO1Di3Bg',
       description: "<p>O primeiro dos tipos das grandezas: as que não possuem direção e sentido.</p>",
       previousClassId: 7,
       nextClassId: 9,
    }
      break;
    case 9: completeClass =  {
       id: 9,
       title: 'Grandezas vetoriais', 
       number: 9, 
       duration: 5,
       url: 'https://www.youtube.com/embed/X_AHrosOZIc',
       description: "<p>O segundo tipo de grandezas, que possuem uma orientação mais definida.</p>",
       previousClassId: 8,
       nextClassId: null,
    }
      break;
    case 10: completeClass = { 
      id: 10,
      title: 'Introdução à ao dialeto inglês', 
      number: 10, 
      duration: 5,
      url: 'https://www.youtube.com/embed/X_AHrosOZIc',
      description: "<p>Será abordado os fundamentos básicos da língua inglesa.</p><p>Prepare-se para uma jornada diferente!</p>",
      previousClassId: null,
      nextClassId: 11,
    }
      break;
    case 11: completeClass = { 
      id: 11,
      title: 'Aprendendo classes gramaticais', 
      number: 11, 
      duration: 6,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Da mesma forma que aprendemos em português, veremos em inglês.</p><p>As classes são a base da língua, então preste atenção!</p>",
      previousClassId: 10,
      nextClassId: 12,
    }
      break;
    case 12: completeClass = { 
      id: 12,
      title: 'Desvendando tempo verbais', 
      number: 12, 
      duration: 6,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Para nos expressarmos, precisamos utilizar dos verbos e seus tempos.</p><p>Veremos que é um conteúdo mais simples que no português.</p>",
      previousClassId: 11,
      nextClassId: null,
    }
      break;
    case 13: completeClass = { 
      id: 13,
      title: 'Introdução à teoria química', 
      number: 13, 
      duration: 5,
      url: 'https://www.youtube.com/embed/UwLFO1Di3Bg',
      description: "<p>Abordarems os conceitos fundamentais da química. Prepare-se</p>",
      previousClassId: null,
      nextClassId: 14,
    }
      break;
    case 14: completeClass = { 
      id: 14,
      title: 'A tabela periódica', 
      number: 14, 
      duration: 6,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Chegamos na tão sonhada tabela periódica.</p><p>Ela que guarda informações preciosas sobre diversas substâncias!</p>",
      previousClassId: 13,
      nextClassId: 15,
    }
      break;
    case 15: completeClass = { 
      id: 15,
      title: 'Reações químicas', 
      number: 15, 
      duration: 6,
      url: 'https://www.youtube.com/embed/X_AHrosOZIc',
      description: "<p>Nesta aula veremos sobre como as reações químicas acontecem.</p><p>Se prepare apra entender como o mentos e a coca-cola geram a famosa explosão!</p>",
      previousClassId: 14,
      nextClassId: 16,
    }
      break;
    case 16: completeClass = { 
      id: 16,
      title: 'Bases, sais e ácidos não orgânicos', 
      number: 16, 
      duration: 8,
      url: 'https://www.youtube.com/embed/UwLFO1Di3Bg',
      description: "<p>Os sais, talvez a coisa mais comum que temos no nosso cotidiano.</p><p>O sal de cozinha é um exemplo de sal, se você não sabia :)</p>",
      previousClassId: 15,
      nextClassId: null,
    }
      break;
    case 17: completeClass = { 
      id: 17,
      title: 'Introdução à táticas de comunicação', 
      number: 17, 
      duration: 5,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Uma breve introdução a métodos de se expressar.</p><p>Trata-se de dicas simples, mas que fazem toda a diferença.</p>",
      previousClassId: null,
      nextClassId: 18,
    }
      break;
    case 18: completeClass = { 
      id: 18,
      title: 'Como captar a atenção do público?', 
      number: 18, 
      duration: 6,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Uma das maiores dificuldades...</p><p>Vamos ver como atrair os olofotes para você, e captar o seu ouvinte.</p>",
      previousClassId: 17,
      nextClassId: 19,
    }
      break;
    case 19: completeClass = { 
      id: 19,
      title: 'Se expressando melhor', 
      number: 19, 
      duration: 6,
      url: 'https://www.youtube.com/embed/X_AHrosOZIc',
      description: "<p>Veremos como organizar o discurso de uma forma eficiente.</p><p>Falar direto e limpo é muito importante para passar a mensagem.</p>",
      previousClassId: 18,
      nextClassId: 20,
    }
      break;
    case 20: completeClass = { 
      id: 20,
      title: 'Como lidar com questionamentos', 
      number: 20, 
      duration: 8,
      url: 'https://www.youtube.com/embed/UwLFO1Di3Bg',
      description: "<p>Tudo vai bem até o momento das perguntas.</p><p>Nesta aula, será abordado como responder perguntas complexas e que não sabemos a resposta.</p>",
      previousClassId: 19,
      nextClassId: null,
    }
      break;
    case 21: completeClass = { 
      id: 21,
      title: 'Introdução à teoria de redação', 
      number: 21, 
      duration: 5,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Escrever é uma das formas mais importantes de se expressar.</p><p>Nesta aula, veremos a base de um texto bem redigido.</p>",
      previousClassId: null,
      nextClassId: 22,
    }
      break;
    case 22: completeClass = { 
      id: 22,
      title: 'Compreendendo os tipos de texto', 
      number: 22, 
      duration: 6,
      url: 'https://www.youtube.com/embed/X_AHrosOZIc',
      description: "<p>Veremos quais os princiáis tipos de texto, e quando utilizá-los.</p><p>Um bom texto começa pela forma que decidimos escrevê-lo.</p>",
      previousClassId: 21,
      nextClassId: 23,
    }
      break;
    case 23: completeClass = { 
      id: 23,
      title: 'Como desenvolver uma sinópse', 
      number: 23, 
      duration: 6,
      url: 'https://www.youtube.com/embed/hxVyMeKBJUE',
      description: "<p>Outra parte importante da escrita é ser objetivo.</p><p>Veremos, nesta aula, como elaborar poderosos resumos.</p>",
      previousClassId: 22,
      nextClassId: null,
    }
      break;
    default: break;
  }
  
  return [completeClass, redirectClassId];
}