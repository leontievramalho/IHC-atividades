const apiURL = 'http://localhost:3000/learningCycles';

// Seleciona os elementos da DOM
const newTopicInput = document.getElementById('novo-tema');
const addTopicButton = document.getElementById('add-tema');
const topicList = document.getElementById('ciclos-aprendizagem');

// Função para buscar todos os ciclos de aprendizagem da API
const fetchTopics = async () => {
  const response = await fetch(apiURL);
  const learningCycles = await response.json();
  renderTopics(learningCycles);
};

// Função para renderizar os ciclos de aprendizagem na página
const renderTopics = (learningCycles) => {
  topicList.innerHTML = '';
  learningCycles.forEach(cycle => {
    const cycleItems = document.createElement('ul')

    const topicName = document.createElement('li')

    topicName.innerHTML = `
      ${cycle.topic}
      <button data-id="${cycle.id}" style="width: 40px; margin-left: 20px">x</button>
      `

    cycleItems.appendChild(topicName)
    topicName.querySelector('button').addEventListener('click', () => deleteTopic(cycle.id));

    const goalsTitle = document.createElement('li')
    goalsTitle.innerText = "Metas"

    cycleItems.appendChild(goalsTitle)

    const newGoal = document.createElement('li')
    newGoal.innerHTML = `
      <input type="text" id="new-goal" placeholder="Adicione uma nova meta">
      <button id="add-goal">Adicionar</button>
    `

    cycleItems.appendChild(newGoal)

    const newGoalInput = newGoal.querySelector('input')
    const newGoalButton = newGoal.querySelector('button')

    newGoalButton.addEventListener('click', () => addGoal(cycle.id, newGoalInput.value))

    const goalItems = document.createElement('ul')

    cycleItems.appendChild(goalItems)

    topicList.appendChild(cycleItems);

    cycle.goals.forEach(goal => {
        const li = document.createElement("li")
        li.innerHTML = `
        ${goal.text}
        <button data-id="${goal.id}" style="width: 20px; margin-left: 20px">x</button>
      `;
        //li.querySelector.addEventListener('click', () => concludeGoal(cycle.id, goal.id));
        goalItems.appendChild(li)

        li.querySelector('button').addEventListener('click', () => deleteGoal(cycle.id, goal.id));
      }

    )
  });
};

// Função para adicionar um novo ciclo de aprendizagem
const addTopic = async () => {
  const text = newTopicInput.value;
  if (!text) return;

  const newTopic = {
    topic: text,
    completed: false,
    review: false,
    goals: [],
  };

  await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTopic)
  });

  newTopicInput.value = '';
  fetchTopics(); // Atualiza a lista de conteudos do Json e depois recarrega com renderTopics
};

// Função para deletar um ciclo de aprendizagem
const deleteTopic = async (id) => {
  await fetch(`${apiURL}/${id}`, {
    method: 'DELETE'
  });
  fetchTopics(); // Atualiza a lista de conteudos do Json e depois recarrega com renderTopics
};

//Função para adicionar uma meta de um ciclo de aprendizagem
const addGoal = async (cycleId, inputValue) => {

  if (!inputValue) return;
  const newGoal = {
    text: inputValue,
    id: Date.now().toString(),
    completed: false
  }

  const response = await fetch(`${apiURL}/${cycleId}`)
  const cycle = await response.json()
  const newGoals = cycle.goals
  newGoals.push(newGoal)
  await fetch(`${apiURL}/${cycleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goals: newGoals
    })
  })
  fetchTopics();
}

// Função para deletar uma meta de um ciclo de aprendizagem
const deleteGoal = async (cycleId, goalId) => {
  const response = await fetch(`${apiURL}/${cycleId}`);
  const cycle = await response.json();
  const newGoals = cycle.goals.filter(goal => goal.id != goalId)
  await fetch(`${apiURL}/${cycleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goals: newGoals
    })
  });
  fetchTopics(); // Atualiza a lista de conteudos do Json e depois recarrega com renderTopics
};

// Eventos
addTopicButton.addEventListener('click', addTopic);

// Carregar todos os ciclos de aprendizagem ao iniciar
fetchTopics();